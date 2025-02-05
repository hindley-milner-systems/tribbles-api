import { pipe } from './utils.js';

const DEFAULT_CONFIG = {
  requestLimit: process.env.REQUEST_LIMIT || 50,
  timeWindow: process.env.TIME_WINDOW || 15000,
  queueTimeout: process.env.QUEUE_TIMEOUT || 30000,
  maxQueueSize: process.env.MAX_QUEUE_SIZE || 1000,
  processingDelay: process.env.PROCESSING_DELAY || 50,
  ipLimit: process.env.IP_LIMIT || 30,
  ipWindowMs: process.env.IP_WINDOW_MS || 60000,
};

const withMetrics = () => o =>
  Object.assign({}, o, {
    metrics: {
      totalProcessed: 0,
      totalErrors: 0,
      totalTimeouts: 0,
      totalRateLimited: 0,
    },
    getMetrics() {
      return {
        ...this.metrics,
        currentQueueLength: this.queue.length,
        estimatedWaitTime: this.queue.length * this.config.processingDelay,
        oldestRequest: this.queue[0]?.timestamp,
      };
    },
    incrementMetric(metric) {
      this.metrics[metric]++;
      return this.metrics[metric];
    },
  });

const withProcessing = redis => o =>
  Object.assign({}, o, {
    processing: false,
    async checkIpLimit(ip) {
      const key = `ip:${ip}`;
      const count = await redis.incr(key);
      if (count === 1) {
        await redis.pexpire(key, this.config.ipWindowMs);
      }
      return count <= this.config.ipLimit;
    },
    async processQueue() {
      if (this.processing || this.queue.length === 0) return;
      this.processing = true;

      try {
        while (this.queue.length > 0) {
          const currentCount = await redis.incr('global_request_count');

          if (currentCount === 1) {
            await redis.expire(
              'global_request_count',
              this.config.timeWindow / 1000,
            );
          }

          if (currentCount > this.config.requestLimit) {
            await new Promise(resolve =>
              setTimeout(resolve, this.config.processingDelay),
            );
            continue;
          }

          const request = this.queue.shift();

          // Check IP limit before processing
          if (!(await this.checkIpLimit(request.ip))) {
            request.reject(new Error('IP rate limit exceeded'));
            this.incrementMetric('totalRateLimited');
            continue;
          }

          try {
            const result = await request.handler();
            request.resolve(result);
            this.incrementMetric('totalProcessed');
          } catch (error) {
            request.reject(error);
            this.incrementMetric('totalErrors');
          }

          await new Promise(resolve =>
            setTimeout(resolve, this.config.processingDelay),
          );
        }
      } finally {
        this.processing = false;
      }
    },
  });

const withEnqueuing = () => o =>
  Object.assign({}, o, {
    queue: [],
    async enqueue(requestHandler, requestId, ip) {
      if (this.queue.length >= this.config.maxQueueSize) {
        throw new Error('Queue capacity exceeded');
      }

      return new Promise((resolve, reject) => {
        const timeoutId = setTimeout(() => {
          this.incrementMetric('totalTimeouts');
          this.queue = this.queue.filter(item => item.requestId !== requestId);
          reject(new Error('Request timeout'));
        }, this.config.queueTimeout);

        this.queue.push({
          handler: requestHandler,
          resolve: result => {
            clearTimeout(timeoutId);
            resolve(result);
          },
          reject,
          requestId,
          ip,
          timestamp: Date.now(),
        });

        this.processQueue().catch(err => {
          console.error('Queue processing error:', err);
          this.incrementMetric('totalErrors');
        });
      });
    },
  });

const withReset = () => o =>
  Object.assign({}, o, {
    reset() {
      this.queue = [];
      this.processing = false;
      this.metrics = {
        totalProcessed: 0,
        totalErrors: 0,
        totalTimeouts: 0,
      };
    },
  });

const withLogging = logger => o =>
  Object.assign({}, o, {
    logError(error) {
      logger.error('Queue error:', error);
    },
    logMetrics() {
      logger.info('Queue metrics:', this.getMetrics());
    },
  });

const createQueue = ({ config, redis, logger }) =>
  pipe(
    withMetrics(),
    withProcessing(redis),
    withEnqueuing(),
    withReset(),
    withLogging(logger),
  )({ config });

export { createQueue, DEFAULT_CONFIG };
