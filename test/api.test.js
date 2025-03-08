import test from 'ava';
import supertest from 'supertest';
import sinon from 'sinon';
import { createServer } from '../index.js';
import Redis from 'ioredis';
import pino from 'pino';

// Mock merkleTreeAPI
const mockMerkleTreeAPI = {
  constructProof: sinon.stub(),
};

// Create a fixed UUID for testing
const TEST_UUID = '12345678-1234-1234-1234-123456789012';

test.before(async t => {
  // Setup Redis
  const redis = new Redis();
  const logger = pino({ level: 'silent' });

  // Mock queue
  const mockQueue = {
    enqueue: sinon.stub().callsFake(async handler => {
      return handler();
    }),
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

  // Create server with mocks
  const app = createServer({
    redis,
    logger,
    queue: mockQueue,
    merkleTreeAPI: mockMerkleTreeAPI,
    generateRequestId: () => TEST_UUID,
  });

  t.context = {
    app,
    redis,
    mockQueue,
    mockMerkleTreeAPI,
  };
});

test.afterEach(() => {
  // Reset stubs
  sinon.reset();
});

test.after.always(async t => {
  await t.context.redis.quit();
});

test('GET /health returns healthy status when Redis is connected', async t => {
  const { app } = t.context;

  const response = await supertest(app).get('/health').expect(200);

  t.is(response.body.status, 'healthy');
  t.is(response.body.redis, 'connected');
  t.is(response.body.queue.health, 'healthy');
});

test('POST /api/verify-eligibility returns eligible response for valid key', async t => {
  const { app, mockMerkleTreeAPI } = t.context;

  // Mock proof generation
  mockMerkleTreeAPI.constructProof.returns(['root', { hash: 'valid-hash' }]);

  const response = await supertest(app)
    .post('/api/verify-eligibility')
    .send({ publicKey: { key: 'valid-key' } })
    .expect(200);

  t.is(response.body.message, 'User is eligible for airdrop.');
  t.deepEqual(response.body.payload, ['root', { hash: 'valid-hash' }]);
  t.true(mockMerkleTreeAPI.constructProof.calledWith('valid-key'));
});

test('POST /api/verify-eligibility returns ineligible response for invalid key', async t => {
  const { app, mockMerkleTreeAPI } = t.context;

  // Mock proof generation for ineligible key
  mockMerkleTreeAPI.constructProof.returns(['root', undefined]);

  const response = await supertest(app)
    .post('/api/verify-eligibility')
    .send({ publicKey: { key: 'invalid-key' } })
    .expect(400);

  t.is(response.body.message, 'User is ineligible for the tribbles airdrop.');
  t.true(mockMerkleTreeAPI.constructProof.calledWith('invalid-key'));
});

test('GET /api/queue-status returns queue metrics', async t => {
  const { app, mockQueue } = t.context;

  const response = await supertest(app).get('/api/queue-status').expect(200);

  t.truthy(response.body.timestamp);
  t.is(response.body.currentQueueLength, 0);
});

test('GET /api/transaction-rate returns transaction rate info', async t => {
  const { app, redis } = t.context;

  // Set up Redis for this test
  await redis.set('global_request_count', '5');
  await redis.expire('global_request_count', 30);

  const response = await supertest(app)
    .get('/api/transaction-rate')
    .expect(200);

  t.is(response.body.currentTransactions, 5);
  t.true(response.body.windowRemainingSeconds <= 30);
  t.is(response.body.maxTransactionsPerWindow, 1);
  t.is(response.body.windowSizeSeconds, 8);
});
