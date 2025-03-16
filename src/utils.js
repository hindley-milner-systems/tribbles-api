const pipe =
  (...fns) =>
  x =>
    fns.reduce((y, f) => f(y), x);

const union = (name, types) =>
  types.reduce(
    (prev, type) => ({
      ...prev,
      [type]: data => ({
        inspect: () => `${name}.${type}(${data})`,
        match: fns => fns[type](data),
      }),
    }),
    {},
  );
const compose =
  (...fns) =>
  initialValue =>
    fns.reduceRight((acc, val) => val(acc), initialValue);
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
// Define our types

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
    },
  };
};
const getProp = obj => prop => obj[prop];
const or = x => y => x || y;
const hasBody = request => request.body;
const hasPublicKey = request => request.body.publicKey.key;
const not = x => !x;

const getBody = getProp('body');
const getPublicKey = getProp('publicKey');
const getKey = getProp('key');
const isString = val => typeof val === 'string';
const isValidRequest = compose(
  isString,
  getKey,
  or({}),
  getPublicKey,
  or({}),
  getBody,
);

export {
  pipe,
  getProp,
  or,
  isValidRequest,
  compose,
  createCircuitBreaker,
  wait,
  union,
};
