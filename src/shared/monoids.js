// Semigroup + Contract = Monoid
const getHash = ({ hash }) => hash;
const isUndefined = x => x === undefined;
const not = x => !x;
const compose =
  (...fns) =>
  initialValue =>
    fns.reduceRight((acc, val) => val(acc), initialValue);

const getIsUndefined = compose(not, isUndefined, getHash);

const Product = value => ({
  value,
  concat: other => Product(value * other.value),
});
Product.empty = () => Product(1);

const Sum = value => ({
  value,
  concat: other => Sum(value + other.value),
});
Sum.empty = () => Sum(0);

const Any = value => ({
  value,
  concat: other => Any(value || other.value),
});

Any.empty = () => Any(false);

const All = value => ({
  value,
  concat: other => All(value && other.value),
});

All.empty = () => All(true);

const Intersection = value => ({
  value,
  concat: other => Intersection(_.intersection(value, other.value)),
});

const Alternative = value => ({
  value,
  concat: other =>
    Alternative(other.value.isLeft ? value : value.concat(other.ex)),
});

const fold =
  monoid =>
  (data = []) =>
    data.reduce((acc, val) => acc.concat(monoid(val)), monoid.empty());

const mFolds = {
  allTrue: fold(All),
  anyTrye: fold(Any),
  sumAll: fold(Sum),
  multiplyAll: fold(Product),
};

const data = {
  success: [
    {
      hash: '65841582aae8dcb596cb38ff196ac070f83bd019b879ed97041e6be416a1d385',
      direction: 'left',
    },
    {
      hash: 'd0bb415aaec20b82f17bb886d2c48ee7c3259af5010f53005641803aba7a2175',
      direction: 'right',
    },
    {
      hash: '6c745c21ba3edb5109aae76d9fd7a4a8dca6432966b4db8a18ddc9d9cb154580',
      direction: 'right',
    },
    {
      hash: 'f38a7b08ac5a9b5a25d50bf562bdfccde70bb54802cd7efb2ffe7f9d8def424d',
      direction: 'right',
    },
    {
      hash: '403f53a2a7b81f1323d66cc8a8965d5dbeba25cf77e731101eae8689fcb0bbee',
      direction: 'right',
    },
    {
      hash: 'd4f10c6b26ef2bbfb127e12fd1d98791d5b718286e230ab9b843d8ce8f41b87a',
      direction: 'right',
    },
    {
      hash: '64f6e4008ca2c1bb635da596d907c1370df8a24a0261f3af1b6bcf8905190ee1',
      direction: 'right',
    },
    {
      hash: '1d990892f1fe1f8d5c0af3664eb13b327776f961e6461384e323ebcb9921a14f',
      direction: 'right',
    },
    {
      hash: 'cf780e6e280c26d5c951eb9a42c1b1e0c07d30d414656d82f4ad9312605c341c',
      direction: 'right',
    },
    {
      hash: '702b3d244dc26e284ff0339ed0915a71f8ca5154e7e53b4066ecc41fc5b76da4',
      direction: 'right',
    },
    {
      hash: '4760036b289220fa586c87e0a3cfb78b124a5c4dc5e5d6227d2df4384b8c16b6',
      direction: 'right',
    },
  ],
  fail: [
    {
      hash: 'ff3640f04e7c653b397efb34e2f3b1e9ae5d80724c404ad2ae57e5987ef4454c',
      direction: 'right',
    },
    { hash: undefined, direction: 'left' },
    { hash: undefined, direction: 'left' },
    { hash: undefined, direction: 'left' },
    { hash: undefined, direction: 'left' },
    { hash: undefined, direction: 'left' },
    { hash: undefined, direction: 'left' },
    { hash: undefined, direction: 'left' },
    { hash: undefined, direction: 'left' },
    { hash: undefined, direction: 'left' },
    { hash: undefined, direction: 'left' },
  ],
  //.map(getIsUndefined),
};
const mapper = fn => array => array.map(fn);
const { allTrue, anyTrye } = mFolds;
const getValue = ({ value }) => value;

const inspectProof = compose(getValue, allTrue, mapper(getIsUndefined));

inspectProof(data.fail); //?
inspectProof(data.success); //?

export {
  All,
  Alternative,
  Any,
  Intersection,
  Product,
  Sum,
  mFolds,
  allTrue,
  inspectProof,
};
