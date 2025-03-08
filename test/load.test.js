import test from 'ava';
import { createQueue } from '../src/queue.js';
import pino from 'pino';
import Redis from 'ioredis';
import { wait } from '../src/utils.js';

test('Queue enforces 8-second transaction spacing under load', async t => {
  // Setup
  const redis = new Redis();
  const logger = pino({ level: 'silent' });
  
  const queue = createQueue({
    config: {
      requestLimit: 1,
      timeWindow: 8000,
      queueTimeout: 30000,
      maxQueueSize: 1000,
      processingDelay: 8000,
      ipLimit: 10,
      ipWindowMs: 60000,
    },
    redis,
    logger,
  });
  
  try {
    const timestamps = [];
    const handler = () => {
      timestamps.push(Date.now());
      return Promise.resolve('done');
    };
    
    // Submit 3 requests in quick succession
    const promises = [
      queue.enqueue(handler, 'id1'),
      queue.enqueue(handler, 'id2'),
      queue.enqueue(handler, 'id3')
    ];
    
    // Wait for all to complete
    await Promise.all(promises);
    
    // Check time differences
    const diff1 = timestamps[1] - timestamps[0];
    const diff2 = timestamps[2] - timestamps[1];
    
    // Should be at least 8 seconds between each
    t.true(diff1 >= 7900); // Allow small margin for test timing
    t.true(diff2 >= 7900);
    
    // Metrics should show 3 processed requests
    const metrics = queue.getMetrics();
    t.is(metrics.totalProcessed, 3);
  } finally {
    // Cleanup
    await redis.del('global_request_count');
    await redis.quit();
  }
});