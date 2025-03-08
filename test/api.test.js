
import test from 'ava';
import express from 'express';
import request from 'supertest';
import Redis from 'ioredis';
import pino from 'pino';
import { createQueue, DEFAULT_CONFIG } from '../src/queue.js';
import { wait } from '../src/utils.js';

// Mock merkleTreeAPI
const mockMerkleTreeAPI = {
  constructProof: (key) => {
    return [{ hash: 'testhash', direction: 'left' }];
  }
};

// Setup test server
function setupTestServer() {
  const app = express();
  const redis = new Redis();
  const logger = pino({ level: 'silent' });
  
  const TEST_CONFIG = {
    requestLimit: 5,
    timeWindow: 1000, // 1 second for testing
    queueTimeout: 3000, // 3 seconds
    maxQueueSize: 10,
    processingDelay: 50,
  };
  
  const queue = createQueue({
    config: TEST_CONFIG,
    redis,
    logger,
  });
  
  // Middleware
  app.use(express.json());
  app.use((req, res, next) => {
    req.requestId = 'test-id';
    next();
  });
  
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
        res.status(500).json({
          error: 'Internal server error',
          requestId: req.requestId,
        });
      }
    }
  };
  
  // Routes
  app.post('/api/verify-eligibility', rateLimiter, (req, res) => {
    const { publicKey } = req.body;
    
    if (!publicKey || !publicKey.key) {
      return res.status(400).json({ error: 'Invalid request. Public key is required.' });
    }
    
    const proof = mockMerkleTreeAPI.constructProof(publicKey.key);
    return res.json({ message: 'User is eligible for airdrop.', payload: proof });
  });
  
  return { app, redis, queue };
}

test.beforeEach(async t => {
  const { app, redis, queue } = setupTestServer();
  t.context = { app, redis, queue };
  
  // Clear Redis
  await redis.del('global_request_count');
  await wait(50);
});

test.afterEach(async t => {
  const { redis, queue } = t.context;
  queue.reset();
  await redis.del('global_request_count');
  await wait(50);
});

test('API returns 400 for missing public key', async t => {
  const { app } = t.context;
  
  const response = await request(app)
    .post('/api/verify-eligibility')
    .send({});
  
  t.is(response.status, 400);
  t.is(response.body.error, 'Invalid request. Public key is required.');
});

test('API returns eligibility for valid request', async t => {
  const { app } = t.context;
  
  const response = await request(app)
    .post('/api/verify-eligibility')
    .send({ publicKey: { key: 'valid-key' } });
  
  t.is(response.status, 200);
  t.is(response.body.message, 'User is eligible for airdrop.');
  t.truthy(response.body.payload);
});

test('API rate limiting works', async t => {
  const { app } = t.context;
  
  // Make several requests in quick succession
  const promises = [];
  for (let i = 0; i < 6; i++) {
    promises.push(
      request(app)
        .post('/api/verify-eligibility')
        .send({ publicKey: { key: 'valid-key' } })
    );
  }
  
  const responses = await Promise.all(promises);
  
  // First 5 should succeed (per our test config)
  let successCount = 0;
  for (const response of responses) {
    if (response.status === 200) {
      successCount++;
    }
  }
  
  t.is(successCount, 5);
  
  // At least one should be rate limited (either 408 timeout or 503 capacity)
  const rateLimited = responses.some(r => 
    r.status === 408 || r.status === 503
  );
  
  t.true(rateLimited);
});

// Cleanup after all tests
test.after.always(async t => {
  if (t.context && t.context.redis) {
    await t.context.redis.quit();
  }
});
