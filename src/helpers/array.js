/**
 * Returns an array that is the intersection of all the arrays. Each value in the result is present in each of the
 * arrays.
 * @param {array} arrayA array
 * @param {array} arrayB array
 * @returns {array}
 */
export const intersection = (arrayA, arrayB) =>
  [arrayA, arrayB].reduce((a, b) => a.filter((value) => b.includes(value)));

/**
 * Returns the values from arrayA that are not present in arrayB
 * @param {array} arrayA array
 * @param {array} arrayB array
 * @returns {array}
 */
export const difference = (arrayA, arrayB) =>
  [arrayA, arrayB].reduce((a, b) => a.filter((value) => !b.includes(value)));
