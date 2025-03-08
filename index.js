// server.js
import express from 'express';
import cors from 'cors';
import Redis from 'ioredis';
import merkleTreeAPI from './merkle-tree/tree.js';
import pino from 'pino';
import helmet from 'helmet';
import { createQueue, DEFAULT_CONFIG } from './src/queue.js';
import crypto from 'crypto'; // Add explicit import for crypto

const compose =
  (...fns) =>
  initialValue =>
    fns.reduceRight((acc, val) => val(acc), initialValue);

const getHash = ({ hash }) => hash;
const isUndefined = x => x === undefined;
const trace = label => value => {
  console.log(`${label}: ${value}`);
  return value;
};
const isUndefinedCheck = compose(isUndefined, trace('after getHash'), getHash);

// Fix the duplicate requestId middleware and properly handle merkleTreeAPI

const createServer = ({
  redis,
  logger,
  queue,
  merkleTreeAPI: customMerkleTreeAPI,
  generateRequestId,
}) => {
  const app = express();
  
  // Use the provided merkleTreeAPI or the default import
  const treeAPI = customMerkleTreeAPI || merkleTreeAPI;

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
  
  // Eligibility request handler
  const handleSuccessfulRequest = (proof, res) =>
    res.json({ message: 'User is eligible for airdrop.', payload: proof });

  // Rate limiter middleware
  const rateLimiter = async (req, res, next) => {
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
      } else {
        logger.error('Rate limiter error:', error);
        res.status(500).json({
          error: 'Internal server error',
          requestId: req.requestId,
        });
      }
    }
  };

  // Routes
  app.post('/api/verify-eligibility', rateLimiter, (req, res) => {
    const {
      publicKey: { key },
    } = req.body;
    const proof = treeAPI.constructProof(key);

    const [_fst, snd] = proof;
    return isUndefinedCheck(snd)
      ? res.status(400).json({
          message: 'User is ineligible for the tribbles airdrop.',
          requestId: req.requestId,
        })
      : handleSuccessfulRequest(proof, res);
  });

  app.get('/api/queue-status', (req, res) => {
    res.json({
      ...queue.getMetrics(),
      timestamp: new Date().toISOString(),
    });
  });

  app.get('/health', async (req, res) => {
    try {
      await redis.ping();
      const queueMetrics = queue.getMetrics();
      const queueHealth =
        queueMetrics.currentQueueLength < queueMetrics.maxQueueSize * 0.8
          ? 'healthy'
          : 'degraded';

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

  // Add transaction rate monitoring endpoint
  app.get('/api/transaction-rate', async (req, res) => {
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
      res.status(500).json({
        error: 'Failed to retrieve transaction rate',
        requestId: req.requestId,
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

  // Redis client setup
  const redis = new Redis(REDIS_URL, {
    retryStrategy: times => Math.min(times * 50, 2000),
  });

  redis.on('error', err => logger.error('Redis Client Error', err));

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
    merkleTreeAPI  // Pass the merkleTreeAPI explicitly
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
