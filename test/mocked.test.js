import test from 'ava';
import { createQueue } from '../src/queue.js';
import sinon from 'sinon';

// Create mocks for dependencies
const createMocks = () => {
  const mockRedis = {
    incr: sinon.stub().resolves(1),
    expire: sinon.stub().resolves('OK'),
    del: sinon.stub().resolves(1),
    get: sinon.stub().resolves(null),
    ping: sinon.stub().resolves('PONG'),
    ttl: sinon.stub().resolves(0),
    on: sinon.stub(),
  };

  const mockLogger = {
    info: sinon.stub(),
    error: sinon.stub(),
    warn: sinon.stub(),
  };

  return { mockRedis, mockLogger };
};

test('Queue initializes with empty state', t => {
  // Arrange
  const { mockRedis, mockLogger } = createMocks();
  const testConfig = {
    requestLimit: 5,
    timeWindow: 15000,
    queueTimeout: 30000,
    maxQueueSize: 1000,
    processingDelay: 50,
  };

  // Act
  const queue = createQueue({
    config: testConfig,
    redis: mockRedis,
    logger: mockLogger,
  });

  // Assert
  t.deepEqual(queue.metrics, {
    totalProcessed: 0,
    totalErrors: 0,
    totalTimeouts: 0,
  });
  t.deepEqual(queue.queue, []);
  t.false(queue.processing);
});

test('Queue enqueues and processes requests', async t => {
  // Arrange
  const { mockRedis, mockLogger } = createMocks();
  const testConfig = {
    requestLimit: 5,
    timeWindow: 15000,
    queueTimeout: 30000,
    maxQueueSize: 1000,
    processingDelay: 50,
  };

  const queue = createQueue({
    config: testConfig,
    redis: mockRedis,
    logger: mockLogger,
  });

  // Mock the handler function
  const handler = sinon.stub().resolves('success');

  // Act
  const result = await queue.enqueue(handler, 'test-id');

  // Assert
  t.is(result, 'success');
  t.true(handler.calledOnce);
  t.is(queue.metrics.totalProcessed, 1);
});

test('Queue respects rate limits', async t => {
  // Arrange
  const { mockRedis, mockLogger } = createMocks();

  // Configure Redis mock to simulate rate limit
  mockRedis.get.resolves('5'); // Current count is at limit

  const testConfig = {
    requestLimit: 5, // Max 5 requests
    timeWindow: 15000,
    queueTimeout: 30000,
    maxQueueSize: 1000,
    processingDelay: 50,
  };

  const queue = createQueue({
    config: testConfig,
    redis: mockRedis,
    logger: mockLogger,
  });

  // Mock the handler function
  const handler = sinon.stub().resolves('success');

  // Act & Assert
  // The queue should delay processing due to rate limit
  const startTime = Date.now();
  await queue.enqueue(handler, 'test-id');
  const endTime = Date.now();

  // Should have waited for rate limit
  t.true(endTime - startTime >= 50);
  t.true(handler.calledOnce);
});

test('Queue handles errors in handlers', async t => {
  // Arrange
  const { mockRedis, mockLogger } = createMocks();
  const testConfig = {
    requestLimit: 5,
    timeWindow: 15000,
    queueTimeout: 30000,
    maxQueueSize: 1000,
    processingDelay: 50,
  };

  const queue = createQueue({
    config: testConfig,
    redis: mockRedis,
    logger: mockLogger,
  });

  // Mock the handler function to throw an error
  const handler = sinon.stub().rejects(new Error('Test error'));

  // Act & Assert
  await t.throwsAsync(
    async () => {
      await queue.enqueue(handler, 'test-id');
    },
    { message: 'Test error' },
  );

  t.is(queue.metrics.totalErrors, 1);
});
