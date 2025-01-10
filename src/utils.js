const pipe =
  (...fns) =>
  x =>
    fns.reduce((y, f) => f(y), x);

const compose =
  (...fns) =>
  initialValue =>
    fns.reduceRight((acc, val) => val(acc), initialValue);
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

export { pipe, compose, wait };
