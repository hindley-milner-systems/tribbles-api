import test from 'ava';
import sinon from 'sinon';
import request from 'supertest';
import { createServer } from '../index.js';
import Redis from 'ioredis';
import pino from 'pino';
import merkleTreeAPI from '../merkle-tree/tree.js';
// Create isolated test instances for each test to prevent shared state issues
const createTestContext = () => {
  // Use Redis mock instead of real Redis to avoid connection issues
  const redis = new Redis();

  // Silent logger to reduce noise
  const logger = pino({ level: 'silent' });

  // Fixed UUID for testing
  const TEST_UUID = '12345678-1234-1234-1234-123456789012';

  // Mock queue with stubbed methods
  const queue = {
    enqueue: sinon.stub().callsFake(async handler => handler()),
    getMetrics: sinon.stub().returns({
      currentQueueLength: 0,
      maxQueueSize: 1000,
      totalProcessed: 0,
      totalErrors: 0,
      totalTimeouts: 0,
      totalRateLimited: 0,
      oldestRequest: undefined,
      estimatedWaitTime: 0,
    }),
    config: {
      requestLimit: 1,
      timeWindow: 8000,
    },
  };

  // Create Express app
  const app = createServer({
    redis,
    logger,
    queue,
    merkleTreeAPI,
    generateRequestId: () => TEST_UUID,
  });

  return { app, redis, queue, merkleTreeAPI };
};

// Reset stubs after each test
test.afterEach(() => {
  sinon.restore();
});

test('GET /health returns healthy status when Redis is connected', async t => {
  const { app, redis } = createTestContext();

  // Setup Redis mock to simulate healthy connection
  redis.ping = sinon.stub().resolves('PONG');

  const response = await request(app).get('/health').expect(200);

  t.is(response.body.status, 'healthy');
  t.is(response.body.redis, 'connected');
  t.is(response.body.queue.health, 'healthy');
});

test('POST /api/verify-eligibility returns eligible response for valid key', async t => {
  const { app, merkleTreeAPI } = await createTestContext();

  const { pubkeys } = merkleTreeAPI;
  const [a, b, ...c] = pubkeys;
  // Mock proof generation for eligible key

  t.log('KEY:::', key);

  const response = await request(app)
    .post('/api/verify-eligibility')
    .send({ publicKey: { key: a } })
    .expect(200);

  t.is(response.body.message, 'User is eligible for airdrop.');
  t.deepEqual(response.body.payload, merkleTreeAPI.constructProof(a));
  t.true(merkleTreeAPI.constructProof.calledWith(a));
});

test('POST /api/verify-eligibility returns ineligible response for invalid key', async t => {
  const { app, merkleTreeAPI } = createTestContext();

  const response = await request(app)
    .post('/api/verify-eligibility')
    .send({ publicKey: { key: 'invalid-key' } })
    .expect(400);

  t.is(response.body.message, 'User is ineligible for the tribbles airdrop.');
  t.true(merkleTreeAPI.constructProof.calledWith('invalid-key'));
});

test('GET /api/queue-status returns queue metrics', async t => {
  const { app, queue } = createTestContext();

  const response = await request(app).get('/api/queue-status').expect(200);

  t.truthy(response.body.timestamp);
  t.is(response.body.currentQueueLength, 0);
});

test('GET /api/transaction-rate returns transaction rate info', async t => {
  const { app, redis } = createTestContext();

  // Set up Redis mock for this test
  redis.get = sinon.stub().withArgs('global_request_count').resolves('5');
  redis.ttl = sinon.stub().withArgs('global_request_count').resolves(30);

  const response = await request(app).get('/api/transaction-rate').expect(200);

  t.is(response.body.currentTransactions, 5);
  t.true(response.body.windowRemainingSeconds <= 30);
  t.is(response.body.maxTransactionsPerWindow, 1);
  t.is(response.body.windowSizeSeconds, 8);
});
