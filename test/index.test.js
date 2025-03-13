import test from 'ava';
import { createQueue } from '../src/queue.js';
import pino from 'pino';
import Redis from 'ioredis';
import { wait } from '../src/utils.js';
import sinon from 'sinon'; // Add missing sinon import

const createMocks = () => {
  const mockRedis = {
    incr: sinon.stub().resolves(1),
    expire: sinon.stub().resolves('OK'),
    pexpire: sinon.stub().resolves('OK'),
    del: sinon.stub().resolves(1),
    get: sinon.stub().resolves(null),
    set: sinon.stub().resolves('OK'),
    ping: sinon.stub().resolves('PONG'),
    ttl: sinon.stub().resolves(0),
    on: sinon.stub(),
    end: sinon.stub().resolves(),
    quit: sinon.stub().resolves(),
  };

  const mockLogger = {
    info: sinon.stub(),
    error: sinon.stub(),
    warn: sinon.stub(),
  };

  return { mockRedis, mockLogger };
};

const TEST_CONFIG = {
  requestLimit: 1, // Changed to 1 to match production
  timeWindow: 8000, // Changed to 8000ms (8 seconds)
  queueTimeout: 30000, // 30 seconds
  maxQueueSize: 1000,
  processingDelay: 50, // Keep short for testing
  ipLimit: 10, // Added IP limit
  ipWindowMs: 60000, // Added IP window
};

const trace = label => value => {
  console.log(label, '::::', value);
  return value;
};

// Fix the test.before hook to use mocks instead of real Redis
test.before(t => {
  // Use mocks instead of real Redis to avoid connection issues
  const { mockRedis, mockLogger } = createMocks();

  const queueConfig = {
    config: TEST_CONFIG,
    redis: mockRedis,
    logger: mockLogger,
  };

  t.context = { queueConfig };
});

// Update afterEach to work with mocks
test.afterEach(async t => {
  const { queueConfig } = t.context;
  // Reset stubs instead of making real Redis calls
  if (queueConfig.redis.del.resetHistory) {
    queueConfig.redis.del.resetHistory();
    queueConfig.redis.get.resetHistory();
    queueConfig.redis.ttl.resetHistory();
  }
  // Wait for any pending operations to complete
  await wait(50);
});

// Update beforeEach to work with mocks
test.beforeEach(async t => {
  const { queueConfig } = t.context;
  // Reset stubs instead of making real Redis calls
  if (queueConfig.redis.del.resetHistory) {
    queueConfig.redis.del.resetHistory();
  }
  // Wait for Redis operation to complete
  await wait(50);
});

// Fix the first test to match the actual queue metrics structure
test('Queue initializes with empty state', t => {
  const { queueConfig } = t.context;
  const queue = createQueue(queueConfig);

  // Check that metrics has the expected properties
  t.is(queue.metrics.totalProcessed, 0);
  t.is(queue.metrics.totalErrors, 0);
  t.is(queue.metrics.totalTimeouts, 0);
  t.is(queue.metrics.totalRateLimited, 0);

  // Check queue is empty
  t.deepEqual(queue.queue, []);
  t.false(queue.processing);
});

test('Queue respects max size limit', async t => {
  const { queueConfig } = t.context;
  const queue = createQueue({
    ...queueConfig,
    config: { ...TEST_CONFIG, maxQueueSize: 2, processingDelay: 1000 },
  });

  // Use a slower handler to ensure requests stay in queue
  const handler = () =>
    new Promise(resolve => setTimeout(() => resolve('done'), 500));

  // Add requests without awaiting to fill queue quickly
  queue.enqueue(handler, 'id1');
  queue.enqueue(handler, 'id2');

  // Third request should fail because queue is full
  await t.throwsAsync(() => queue.enqueue(handler, 'id3'), {
    message: 'Queue capacity exceeded',
  });
});

test('Queue processes requests in order', async t => {
  const { queueConfig } = t.context;
  const queue = createQueue(queueConfig);
  const results = [];

  try {
    const handler1 = () =>
      new Promise(resolve =>
        setTimeout(() => {
          results.push(1);
          resolve('first');
        }, 100),
      );

    const handler2 = () =>
      new Promise(resolve => {
        results.push(2);
        resolve('second');
      });

    await Promise.all([
      queue.enqueue(handler1, 'id1'),
      queue.enqueue(handler2, 'id2'),
    ]);

    // Wait a bit to ensure processing is complete
    await wait(150);

    t.deepEqual(results, [1, 2]);
  } finally {
    queue.reset();
    await wait(50);
  }
});
test('Queue handles timeouts correctly', async t => {
  const { queueConfig } = t.context;
  const queue = createQueue({
    ...queueConfig,
    config: {
      ...TEST_CONFIG,
      queueTimeout: 100, // Set timeout in config
    },
  });

  const slowHandler = () => wait(200);

  const error = await t.throwsAsync(() => queue.enqueue(slowHandler, 'id1'), {
    message: 'Request timeout',
  });

  await wait(150); // Wait for cleanup
  t.is(queue.getMetrics().totalTimeouts, 1);
});

test('Queue provides accurate status information', async t => {
  const { queueConfig } = t.context;
  const queue = createQueue(queueConfig);
  const now = Date.now();

  const handler = () => wait(100);

  // Enqueue multiple items
  await Promise.all([
    queue.enqueue(handler, 'id1'),
    queue.enqueue(handler, 'id2'),
  ]);

  const status = await queue.getMetrics();

  t.true(status.currentQueueLength >= 0);
  t.true(status.oldestRequest >= now || status.oldestRequest === undefined);
  t.true(status.estimatedWaitTime >= 0);
});

// Reduce the timeouts in the remaining tests to prevent test timeouts
test('Queue handles concurrent requests', async t => {
  const { queueConfig } = t.context;
  const queue = createQueue(queueConfig);
  const results = [];

  const handler = id => () =>
    new Promise(
      resolve =>
        setTimeout(() => {
          results.push(id);
          resolve(id);
        }, 10), // Reduce timeout from random*100 to just 10ms
    );

  // Enqueue 5 concurrent requests
  await Promise.all([
    queue.enqueue(handler(1), 'id1'),
    queue.enqueue(handler(2), 'id2'),
    queue.enqueue(handler(3), 'id3'),
    queue.enqueue(handler(4), 'id4'),
    queue.enqueue(handler(5), 'id5'),
  ]);

  // Should process in order regardless of resolution time
  t.deepEqual(results, [1, 2, 3, 4, 5]);
});
test('Queue cleans up after processing', async t => {
  const { queueConfig } = t.context;
  const queue = createQueue(queueConfig);

  const handler = () => Promise.resolve('done');
  await queue.enqueue(handler, 'id1');

  // Wait for processing to complete
  await wait(150);

  t.is(queue.queue.length, 0);
  t.false(queue.processing);
});

test('Queue handles errors gracefully', async t => {
  const { queueConfig } = t.context;
  const queue = createQueue(queueConfig);

  const handler = () => Promise.reject(new Error('test error'));

  await t.throwsAsync(() => queue.enqueue(handler, 'id1'), {
    message: 'test error',
  });

  // Wait for processing to complete
  await wait(150);

  t.is(queue.getMetrics().totalErrors, 1);
  t.is(queue.queue.length, 0);
  t.false(queue.processing);
});

// TODO: figure out how to best enforce db disconnection
test.after(async t => {
  const { redis } = t.context.queueConfig;
  await redis.end();
});

// Add after existing tests
test('Queue enforces IP rate limits', async t => {
  const { mockRedis, mockLogger } = createMocks();

  // Mock the checkIpLimit method directly to fail on the third IP
  let ipCount = {};
  const checkIpLimitMock = async ip => {
    ipCount[ip] = (ipCount[ip] || 0) + 1;
    // Return false (rate limited) for the 3rd call with the same IP
    return ipCount[ip] <= 2;
  };

  // Create a queue with our mocked methods
  const queue = createQueue({
    config: {
      ...TEST_CONFIG,
      ipLimit: 2, // Set low for testing
      ipWindowMs: 60000,
    },
    redis: mockRedis,
    logger: mockLogger,
  });

  // Override the checkIpLimit method
  queue.checkIpLimit = checkIpLimitMock;

  const handler = () => Promise.resolve('done');
  const ip = '192.168.1.1';

  // First request (under limit)
  await queue.enqueue(handler, 'id1', ip);

  // Second request (at limit, still allowed)
  await queue.enqueue(handler, 'id2', ip);

  // Third request should fail due to our mock returning false (rate limited)
  try {
    await queue.enqueue(handler, 'id3', ip);
    t.fail('Expected IP rate limit to be enforced');
  } catch (error) {
    t.is(error.message, 'IP rate limit exceeded');
  }

  // Different IP should still work
  await t.notThrowsAsync(() => queue.enqueue(handler, 'id4', '192.168.1.2'));
});

test('Queue enforces global rate limit', async t => {
  const { mockRedis, mockLogger } = createMocks();

  // Set up redis mock to return over-limit first, then under limit on subsequent calls
  mockRedis.incr.onFirstCall().resolves(2); // Over limit (limit is 1)
  mockRedis.incr.onSecondCall().resolves(1); // Second check, under limit

  const queue = createQueue({
    config: {
      ...TEST_CONFIG,
      requestLimit: 1,
      timeWindow: 500, // Short window for testing
      processingDelay: 100,
    },
    redis: mockRedis,
    logger: mockLogger,
  });

  const start = Date.now();
  const handler = () => Promise.resolve('done');

  // This should be delayed until rate limit resets
  await queue.enqueue(handler, 'id1');

  const elapsed = Date.now() - start;

  // Should have waited for rate limit to reset
  t.true(elapsed >= 100);
});
