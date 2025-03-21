/* eslint-disable no-shadow */
import { getProp } from '../utils.js';
import { Either, Fn } from './monads.js';

const { fromNullable } = Either;

/** @file utility library for working with lenses (composable getters/setters) */

const curry = (f, arity = f.length, ...args) =>
  arity <= args.length
    ? f(...args)
    : (...argz) => curry(f, arity, ...args, ...argz);

/**
 * Transforms a curried function into an uncurried function.
 *
 * @function
 * @param {Function} fn - The curried function to uncurry.
 * @returns {Function} The uncurried function.
 */

const uncurry =
  fn =>
  (...args) =>
    args.reduce((fn, arg) => fn(arg), fn);

const always = a => _b => a;

const compose =
  (...fns) =>
  args =>
    fns.reduceRight((x, f) => f(x), args);

const getFunctor = x => ({
  value: x,
  map: _f => getFunctor(x),
});

const setFunctor = x => ({
  value: x,
  map: f => setFunctor(f(x)),
});

const prop = curry((k, obj) => (obj ? obj[k] : undefined));

const assoc = curry((k, v, obj) => ({ ...obj, [k]: v }));

const lens = curry(
  (getter, setter) => F => target =>
    F(getter(target)).map(focus => setter(focus, target)),
);

const lensProp = k => lens(prop(k), assoc(k));

const lensPath = path => compose(...path.map(lensProp));

const view = curry((lens, obj) => lens(getFunctor)(obj).value);

const over = curry((lens, f, obj) => lens(y => setFunctor(f(y)))(obj).value);

const set = curry((lens, val, obj) => over(lens, always(val), obj));

const safeView = curry((lens, obj) =>
  Either.fromUndefined(obj).map(view(lens)),
);

const request = {
  body: {
    publicKey: { key: 'key' },
  },
};
const GETTERS = {
  body: 'body',
  publicKey: 'publicKey',
  key: 'key',
};
const LENSES = Object.entries(CONSTANTS).reduce(
  (acc, [key, val]) => ({ ...acc, `get${[key]}`: lensProp(val) }),
  {},
); //?

const { body: bodyLens, publicKey: publicKeyLens, key: keyLens } = LENSES;

const validRequestData = compose(keyLens, publicKeyLens, bodyLens);

const safeViewCurried = curry(safeView);

const getPublicKeyFromRequestBody = safeViewCurried(validRequestData);
getPublicKeyFromRequestBody(request); //?
export { lens, lensPath, lensProp, view, set, over };
