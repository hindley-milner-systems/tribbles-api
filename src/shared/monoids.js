// Semigroup + Contract = Monoid

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
export { All, Alternative, Any, Intersection, Product, Sum, mFolds };
