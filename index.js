// server.js
import express from 'express';
import cors from 'cors';
import Redis from 'ioredis';
import merkleTreeAPI from './merkle-tree/tree.js';
import pino from 'pino';
import helmet from 'helmet';
import { createQueue, DEFAULT_CONFIG } from './src/queue.js';
import crypto from 'crypto'; // Add explicit import for crypto
import {
  updateRedisStatus,
  getRedisStatus,
  respondToRequest,
  validateRequest,
} from './src/db.js';

// Fix the duplicate requestId middleware and properly handle merkleTreeAPI

const createServer = ({
  redis,
  logger,
  queue,
  merkleTreeAPI: customMerkleTreeAPI,
  generateRequestId,
}) => {
  const app = express();

  // Middleware
  app.use(helmet());
  app.use(cors());
  app.use(express.json({ limit: '100kb' }));

  // Use the provided generator or fall back to crypto.randomUUID
  const getRequestId = generateRequestId || (() => crypto.randomUUID());

  // Request ID middleware - KEEP ONLY THIS ONE
  app.use((req, res, next) => {
    req.requestId = getRequestId();
    next();
  });

  // Request logging middleware
  app.use((req, res, next) => {
    const start = Date.now();

    // Log when request completes
    res.on('finish', () => {
      const duration = Date.now() - start;
      logger.info({
        method: req.method,
        url: req.url,
        status: res.statusCode,
        duration,
        requestId: req.requestId,
        ip: req.ip,
      });
    });

    next();
  });

  // IMPORTANT: Remove this commented out middleware completely
  // It's causing confusion in the code review

  // Rate limiter middleware with Redis connection check
  const rateLimiter = async (req, res, next) => {
    // Check Redis connection status first
    if (!getRedisStatus().isConnected) {
      logger.warn('Rate limiting bypassed due to Redis disconnection');
      // Allow the request to proceed without rate limiting when Redis is down
      return next();
    }

    try {
      await queue.enqueue(
        async () => new Promise(resolve => resolve(next())),
        req.requestId,
        req.ip, // Add IP address for tracking
      );
    } catch (error) {
      if (error.message === 'Request timeout') {
        res.status(408).json({
          error: 'Request timeout',
          requestId: req.requestId,
        });
      } else if (error.message === 'Queue capacity exceeded') {
        res.status(503).json({
          error: 'Service unavailable',
          requestId: req.requestId,
        });
      } else if (error.message === 'IP rate limit exceeded') {
        res.status(429).json({
          error: 'Too many requests from this IP, please try again later.',
          requestId: req.requestId,
        });
      } else if (error.message && error.message.includes('Redis')) {
        // Redis-specific errors should update the connection status
        logger.error('Redis error in rate limiter:', error);
        updateRedisStatus({ isConnected: false, lastError: error });

        // Allow the request to proceed without rate limiting
        next();
      } else {
        logger.error('Rate limiter error:', error);
        res.status(500).json({
          error: 'Internal server error',
          requestId: req.requestId,
        });
      }
    }
  };

  app.post('/api/verify-eligibility', rateLimiter, (req, res, next) => {
    compose(respondToRequest(res, next), validateRequest)(req);
  });

  app.get('/api/queue-status', (req, res) => {
    res.json({
      ...queue.getMetrics(),
      timestamp: new Date().toISOString(),
    });
  });

  app.get('/health', async (req, res) => {
    const redisStatus = getRedisStatus();
    const queueMetrics = queue.getMetrics();
    const queueHealth =
      queueMetrics.currentQueueLength < queueMetrics.maxQueueSize * 0.8
        ? 'healthy'
        : 'degraded';

    // If Redis is already known to be disconnected, don't try to ping
    if (!redisStatus.isConnected) {
      logger.warn('Health check with Redis already known to be disconnected');
      return res.status(503).json({
        status: 'degraded',
        redis: 'disconnected',
        redisLastError: redisStatus.lastError
          ? redisStatus.lastError.message
          : null,
        redisLastReconnectAttempt: redisStatus.lastReconnectAttempt,
        queue: {
          ...queueMetrics,
          health: 'unknown', // Queue health depends on Redis
        },
        timestamp: new Date().toISOString(),
      });
    }

    // Otherwise, try to ping Redis to confirm it's still connected
    try {
      await redis.ping();

      res.json({
        status: 'healthy',
        redis: 'connected',
        queue: {
          ...queueMetrics,
          health: queueHealth,
        },
        timestamp: new Date().toISOString(),
      });
    } catch (error) {
      logger.error('Health check failed:', error);

      // Update Redis status since ping failed
      updateRedisStatus({
        isConnected: false,
        lastError: error,
        lastReconnectAttempt: Date.now(),
      });

      // Try to reconnect
      setTimeout(() => {
        redis.connect().catch(err => {
          logger.error('Redis reconnection failed during health check:', err);
        });
      }, 1000);

      res.status(503).json({
        status: 'unhealthy',
        redis: 'disconnected',
        error: error.message,
        timestamp: new Date().toISOString(),
      });
    }
  });

  // Error handling
  app.use((err, req, res, next) => {
    logger.error('Unhandled error:', err);
    res.status(500).json({
      error: 'Internal server error',
      requestId: req.requestId,
    });
  });

  // Add transaction rate monitoring endpoint with Redis status check
  app.get('/api/transaction-rate', async (req, res) => {
    // Check Redis connection status first
    if (!getRedisStatus().isConnected) {
      logger.warn(
        'Transaction rate check attempted while Redis is disconnected',
      );
      return res.status(503).json({
        error: 'Redis service unavailable',
        requestId: req.requestId,
        redisStatus: 'disconnected',
        timestamp: new Date().toISOString(),
      });
    }

    try {
      const count = (await redis.get('global_request_count')) || 0;
      const ttl = await redis.ttl('global_request_count');

      res.json({
        currentTransactions: parseInt(count, 10),
        windowRemainingSeconds: Math.max(0, ttl),
        maxTransactionsPerWindow: queue.config.requestLimit,
        windowSizeSeconds: queue.config.timeWindow / 1000,
        timestamp: new Date().toISOString(),
      });
    } catch (error) {
      logger.error('Transaction rate check failed:', error);

      // Update Redis status if this was a connection error
      if (
        error.message.includes('connection') ||
        error.code === 'ECONNREFUSED'
      ) {
        updateRedisStatus({ isConnected: false, lastError: error });
      }

      res.status(500).json({
        error: 'Failed to retrieve transaction rate',
        requestId: req.requestId,
        details: error.message,
      });
    }
  });

  return app;
};

// entry point
const initializeServer = async () => {
  const port = process.env.PORT || 3000;
  const REDIS_URL = process.env.REDIS_URL || 'redis://localhost:6379';
  const logger = pino({
    level: process.env.LOG_LEVEL || 'info',
    timestamp: () => `,"time":"${new Date().toISOString()}"`,
  });

  // Redis client setup with health tracking
  const redis = new Redis(REDIS_URL, {
    retryStrategy: times => Math.min(times * 50, 2000),
  });

  // Initialize Redis status
  updateRedisStatus({ isConnected: false });

  // Handle successful connection
  redis.on('connect', () => {
    logger.info('Redis connected successfully');
    updateRedisStatus({
      isConnected: true,
      lastError: null,
      lastReconnectAttempt: null,
    });
  });

  // Wire up the event handlers
  redis.on('error', err => {
    const [state, effect] = handleEvent('error', err);
    console.log('Redis error:', { err, effect });
    console.log('Redis state:::', state);
    runEffect(effect);
  });

  redis.on('close', () => {
    const [state, effect] = handleEvent('close', {});
    console.log('Redis effect:', { effect });
    console.log('Redis state:::', state);
    runEffect(effect);
  });
  // Create queue instance
  const queue = createQueue({
    config: DEFAULT_CONFIG,
    redis,
    logger,
  });

  // Create server
  const app = createServer({
    redis,
    logger,
    queue,
    merkleTreeAPI, // Pass the merkleTreeAPI explicitly
  });

  // Graceful shutdown handler
  const shutdown = async server => {
    logger.info('SIGTERM received. Starting graceful shutdown...');

    // Stop accepting new connections
    server.close(() => {
      logger.info('HTTP server closed');
    });

    // Process remaining items in queue (up to 30 seconds)
    const queueMetrics = queue.getMetrics();
    if (queueMetrics.currentQueueLength > 0) {
      logger.info(
        `Processing ${queueMetrics.currentQueueLength} remaining items...`,
      );

      // Wait up to 30 seconds for queue to drain
      const shutdownTimeout = setTimeout(() => {
        logger.warn('Shutdown timeout reached with items still in queue');
      }, 30000);

      // Check queue every second
      for (let i = 0; i < 30; i++) {
        if (queue.getMetrics().currentQueueLength === 0) {
          clearTimeout(shutdownTimeout);
          logger.info('Queue successfully drained');
          break;
        }
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }

    await redis.quit();
    logger.info('Redis connection closed');

    process.exit(0);
  };

  // Start server
  const server = app.listen(port, () => {
    logger.info(`Server listening at http://localhost:${port}`);
  });

  process.on('SIGTERM', () => shutdown(server));

  return server;
};

// Start the server
initializeServer().catch(error => {
  console.error('Failed to start server:', error);
  process.exit(1);
});

export { createServer, initializeServer };
