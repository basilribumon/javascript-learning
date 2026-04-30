/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const cache = new Map();

    return function(...args) {
        const key = JSON.stringify(args); // unique key for arguments

        if (cache.has(key)) {
            return cache.get(key); // return cached value
        }

        const result = fn(...args); // call original function
        cache.set(key, result);    // store result in cache

        return result;
    }
}
