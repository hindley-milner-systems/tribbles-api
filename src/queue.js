import { pipe } from './utils.js';

const DEFAULT_CONFIG = {
  requestLimit: 1, // 1 transaction
  timeWindow: 8000, // per 8 seconds
  queueTimeout: 60000, // Increased to 60s for high traffic
  maxQueueSize: 1000, // Maximum queue size
  processingDelay: 8000, // Enforce 8s delay between transactions
  ipLimit: 10, // 10 requests per minute per IP
  ipWindowMs: 60000, // 1 minute window
  errorThreshold: 50, // Number of errors before queue reset
  errorNotificationInterval: 10, // Notify every X errors
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
    processingPromise: null,
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
          // Enforce global rate limit
          const currentCount = await redis.incr('global_request_count');
          if (currentCount === 1) {
            await redis.expire(
              'global_request_count',
              this.config.timeWindow / 1000,
            );
          }

          if (currentCount > this.config.requestLimit) {
            // Wait full 8 seconds before checking again
            await new Promise(resolve =>
              setTimeout(resolve, this.config.processingDelay),
            );
            continue;
          }

          const request = this.queue.shift();

          // Check IP limit before processing
          if (request.ip && !(await this.checkIpLimit(request.ip))) {
            request.reject(new Error('IP rate limit exceeded'));
            this.incrementMetric('totalRateLimited');
            continue;
          }

          const startTime = Date.now();

          try {
            const result = await request.handler();
            request.resolve(result);
            this.incrementMetric('totalProcessed');
          } catch (error) {
            request.reject(error);
            this.incrementMetric('totalErrors');
          }

          // Calculate remaining time to ensure full 8-second spacing
          const processingTime = Date.now() - startTime;
          const remainingDelay = Math.max(
            0,
            this.config.processingDelay - processingTime,
          );

          // Always wait the remaining time to ensure 8s between transactions
          await new Promise(resolve => setTimeout(resolve, remainingDelay));
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
          reject: error => {
            clearTimeout(timeoutId);
            reject(error);
          },
          requestId,
          ip,
          timestamp: Date.now(),
        });

        // Use a promise-based mutex pattern to prevent parallel processing
        if (!this.processingPromise || this.processingPromise.isResolved) {
          this.processingPromise = this.processQueue()
            .catch(err => {
              // Log the error
              this.logError(err);
              this.incrementMetric('totalErrors');

              // Implement recovery mechanism
              if (this.metrics.totalErrors > this.config.errorThreshold) {
                this.reset(); // Reset queue state if too many errors
                this.logError(new Error('Queue reset due to excessive errors'));
              }

              // Notify monitoring systems
              if (
                this.metrics.totalErrors %
                  this.config.errorNotificationInterval ===
                0
              ) {
                this.notifyErrorThreshold();
              }
            })
            .finally(() => {
              this.processingPromise.isResolved = true;
            });
        }
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
        totalRateLimited: 0,
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
    notifyErrorThreshold() {
      // Log a critical error for monitoring systems to pick up
      logger.error({
        level: 'CRITICAL',
        message: 'Queue error threshold exceeded',
        metrics: this.getMetrics(),
        timestamp: new Date().toISOString(),
      });

      // In a real production environment, this would integrate with monitoring
      // systems like Datadog, New Relic, or send alerts via Slack/PagerDuty
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
