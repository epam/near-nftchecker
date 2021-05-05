export function memoize(func, resolver) {
  function memoized(...rest) {
    const args = rest;
    const key = resolver ? resolver.apply(this, args) : args[0];
    const { cache } = memoized;

    if (key in cache) {
      return cache[key];
    }

    const result = func.apply(this, args);
    cache[key] = result;

    return result;
  }

  memoized.cache = {};
  return memoized;
}
