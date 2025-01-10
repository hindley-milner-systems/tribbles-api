// server.js
import express from 'express';
import cors from 'cors';
import Redis from 'ioredis';
import merkleTreeAPI from './merkle-tree/tree.js';
import pino from 'pino';
import { createQueue, DEFAULT_CONFIG } from './src/queue.js';

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

const createServer = ({ redis, logger, queue }) => {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use((req, res, next) => {
    req.requestId = crypto.randomUUID();
    next();
  });

  // Eligibility request handler
  const handleSuccessfulRequest = (proof, res) =>
    res.json({ message: 'User is eligible for airdrop.', payload: proof });

  // Rate limiter middleware
  const rateLimiter = async (req, res, next) => {
    try {
      await queue.enqueue(
        async () => new Promise(resolve => resolve(next())),
        req.requestId,
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
    const proof = merkleTreeAPI.constructProof(key);

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
      res.json({
        status: 'healthy',
        redis: 'connected',
        queue: queue.getMetrics(),
      });
    } catch (error) {
      logger.error('Health check failed:', error);
      res.status(503).json({
        status: 'unhealthy',
        redis: 'disconnected',
        error: error.message,
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
  const app = createServer({ redis, logger, queue });

  // Graceful shutdown handler
  const shutdown = async server => {
    logger.info('SIGTERM received. Starting graceful shutdown...');

    server.close(() => {
      logger.info('HTTP server closed');
    });

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
