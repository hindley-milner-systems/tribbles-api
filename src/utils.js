import { Either, Fn } from './shared/monads.js';
import { All } from './shared/monoids.js';

const { tryCatch, fromUndefined } = Either;
const trace = label => value => {
  console.log(label, '::::', value);
  return value;
};

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
const isHexString = string => !/^[0-9a-fA-F]*$/.test(string);

const safeHexString = string =>
  !isHexString(string)
    ? Either.Left('Request body is not a valid hex string')
    : Either.Right(string);
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
const getProp = prop => obj => obj[prop];
const or = x => y => x || y;
const hasBody = request => request.body;
const hasPublicKey = request => request.body.publicKey.key;
const not = x => !x;

const getBody = getProp('body');
const getPublicKey = getProp('publicKey');
const getKey = getProp('key');

const getters = [getBody, getPublicKey];
const isString = val => typeof val === 'string';

const makeSafeFn = fn => args => Either.tryCatch(() => fn(args));

const safeGetBody = makeSafeFn(getBody);

const getHash = ({ hash }) => hash;
const isUndefined = x => x === undefined;
const mapper = fn => array => array.map(fn);
const isNotUndefined = compose(not, isUndefined);

const safeCheckHashes = compose(isNotUndefined, mapper(getHash));
const head = ([x, ...xs]) => x;
const tail = ([x, ...xs]) => xs;

const safeValue = x =>
  !x === true ? Either.Left('User is not eligible') : Either.Right(x);

const isUndefinedCheck = compose(
  trace('after safecheckhahses'),
  safeValue,
  trace('after getHash'),
  getHash,
  // mapper(All),
  // mapper(getHash),
  head,
  trace('after getting tail'),
  tail,
);

const safeStringOr = value =>
  !isString(value) ? new Error('Public key must be a string') : x;

const isValidRequest = compose(safeHexString, getKey, getPublicKey, getBody);

const safeHandleRequest = (request, treeAPI) =>
  isValidRequest(request).chain(hexString => {
    console.log({ hexString });
    const res = Fn(x => x.treeAPI.constructProof(hexString));
    console.log('------------------------');
    console.log('res', res);
    return res;
  });
const defaultProof = [
  { hash: 'default hash', direction: 'right' },
  { hash: undefined, direction: 'left' },
];

const defaultProofRequestResult = {
  proof: [[{ hash: '', direction: '' }], [{ hash: undefined }]],
  requestId: '',
};
const safeUndefinedCheck = (proofRequestResult = defaultProofRequestResult) =>
  isUndefinedCheck(proofRequestResult.proof)
    ? Either.Left({
        message: 'User is ineligible',
        requestId: proofRequestResult.requestId,
      })
    : Either.Right(proofRequestResult);

const safeTail = compose(getProp('hash'), tail);
export {
  safeUndefinedCheck,
  isUndefinedCheck,
  pipe,
  getProp,
  or,
  isValidRequest,
  compose,
  createCircuitBreaker,
  wait,
  union,
  safeHandleRequest,
};
