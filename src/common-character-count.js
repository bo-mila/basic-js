const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount([...arr1], [...arr2]) {
  return arr1.filter(i => {
    const ind = arr2.indexOf(i);
    if (ind !== -1) {
      arr2 = [...arr2.slice(0, ind),...arr2.slice(ind + 1)];
      return true;
    }
    return false;
  }).length;
}

module.exports = {
  getCommonCharacterCount
};
