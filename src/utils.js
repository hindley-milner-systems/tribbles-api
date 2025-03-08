const pipe =
  (...fns) =>
  x =>
    fns.reduce((y, f) => f(y), x);

const compose =
  (...fns) =>
  initialValue =>
    fns.reduceRight((acc, val) => val(acc), initialValue);
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

// Add to your utils.js file

// Circuit breaker implementation
const createCircuitBreaker = (options = {}) => {
  const {
    failureThreshold = 5,
    resetTimeout = 30000,
    fallback = null,
  } = options;
  
  let failures = 0;
  let lastFailure = null;
  let isOpen = false;
  
  return {
    async execute(fn) {
      // If circuit is open, check if we should try again
      if (isOpen) {
        if (Date.now() - lastFailure < resetTimeout) {
          if (fallback) return fallback();
          throw new Error('Circuit breaker open');
        }
        // Try again - circuit half-open
        isOpen = false;
      }
      
      try {
        const result = await fn();
        // Success - reset failure count
        failures = 0;
        return result;
      } catch (error) {
        failures++;
        lastFailure = Date.now();
        
        if (failures >= failureThreshold) {
          isOpen = true;
          // Log circuit breaker trip
          console.error(`Circuit breaker tripped after ${failures} failures`);
        }
        
        if (fallback) return fallback();
        throw error;
      }
    }
  };
};

export { createCircuitBreaker };
export { pipe, compose, wait };
