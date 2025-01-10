import test from 'ava';
import { createQueue } from '../src/queue.js';
import pino from 'pino';
import Redis from 'ioredis';
import { wait } from '../src/utils.js';

const TEST_CONFIG = {
  requestLimit: 5,
  timeWindow: 15000, // 15 seconds
  queueTimeout: 30000, // 30 seconds
  maxQueueSize: 1000,
  processingDelay: 50,
};
const trace = label => value => {
  console.log(label, '::::', value);
  return value;
};
// Fix this in the test.before hook
test.before(t => {
  const redis = new Redis();
  const logger = pino({ level: 'silent' });
  const queueConfig = {
    config: TEST_CONFIG, // Use TEST_CONFIG directly
    redis,
    logger,
  };
  redis.on('error', trace('redis error'));

  t.context = { queueConfig };
});

test.afterEach(async t => {
  const { queueConfig } = t.context;
  await queueConfig.redis.del('global_request_count');
  // Wait for any pending operations to complete
  await wait(150);
});

test.beforeEach(async t => {
  const { queueConfig } = t.context;
  await queueConfig.redis.del('global_request_count');
  // Wait for Redis operation to complete
  await wait(50);
});

test('Queue initializes with empty state', t => {
  const { queueConfig } = t.context;
  const queue = createQueue(queueConfig);

  t.deepEqual(queue.metrics, {
    totalProcessed: 0,
    totalErrors: 0,
    totalTimeouts: 0,
  });
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

test('Queue handles concurrent requests', async t => {
  const { queueConfig } = t.context;
  const queue = createQueue(queueConfig);
  const results = [];

  const handler = id => () =>
    new Promise(resolve =>
      setTimeout(() => {
        results.push(id);
        resolve(id);
      }, Math.random() * 100),
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
