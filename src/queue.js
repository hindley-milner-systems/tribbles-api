import { pipe } from './utils.js';

const DEFAULT_CONFIG = {
  requestLimit: process.env.REQUEST_LIMIT || 1,
  timeWindow: process.env.TIME_WINDOW || 8000,
  queueTimeout: process.env.QUEUE_TIMEOUT || 60000,
  maxQueueSize: process.env.MAX_QUEUE_SIZE || 1000,
  processingDelay: process.env.PROCESSING_DELAY || 8000,
};

const withMetrics = () => o =>
  Object.assign({}, o, {
    metrics: {
      totalProcessed: 0,
      totalErrors: 0,
      totalTimeouts: 0,
      errorsLastMinute: 0,
      lastErrorTime: null,
    },
    circuitBreakerOpen: false,
    lastCircuitCheck: Date.now(),
    
    getMetrics() {
      return {
        ...this.metrics,
        currentQueueLength: this.queue.length,
        estimatedWaitTime: this.queue.length * this.config.processingDelay,
        oldestRequest: this.queue[0]?.timestamp,
        circuitBreakerOpen: this.circuitBreakerOpen,
      };
    },
    
    incrementMetric(metric) {
      this.metrics[metric]++;
      
      // Track recent errors for circuit breaker
      if (metric === 'totalErrors') {
        this.metrics.errorsLastMinute++;
        this.metrics.lastErrorTime = Date.now();
        
        // Check if we should open the circuit breaker
        this._checkCircuitBreaker();
      }
      
      return this.metrics[metric];
    },
    
    _checkCircuitBreaker() {
      const now = Date.now();
      
      // Reset error counter every minute
      if (now - this.lastCircuitCheck > 60000) {
        this.metrics.errorsLastMinute = 0;
        this.lastCircuitCheck = now;
        
        // Auto-close circuit breaker after 1 minute if it was open
        if (this.circuitBreakerOpen) {
          this.circuitBreakerOpen = false;
          if (this.logger) {
            this.logger.info('Circuit breaker reset after cooling period');
          }
        }
      }
      
      // Open circuit breaker if error rate is too high (10+ errors in last minute)
      if (this.metrics.errorsLastMinute >= 10 && !this.circuitBreakerOpen) {
        this.circuitBreakerOpen = true;
        if (this.logger) {
          this.logger.warn('Circuit breaker opened due to high error rate');
        }
      }
    },
  });

const withProcessing = redis => o =>
  Object.assign({}, o, {
    processing: false,
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
          try {
            const result = await request.handler();
            request.resolve(result);
            this.incrementMetric('totalProcessed');
          } catch (error) {
            console.error(`Error processing request ${request.requestId}:`, error);
            request.reject(error);
            this.incrementMetric('totalErrors');
            
            // Log details about failed requests for monitoring
            if (this.logger) {
              this.logger.error({
                msg: 'Queue processing error',
                requestId: request.requestId,
                error: error.message,
                timestamp: new Date().toISOString(),
              });
            }
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
    async enqueue(requestHandler, requestId) {
      // Check circuit breaker before accepting new requests
      if (this.circuitBreakerOpen) {
        throw new Error('Service temporarily unavailable due to high error rate');
      }
      
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
