const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine([...arr]) {
  const result = [];
  let control = [];
  arr.map((i, indx) => {
    if (control[0] === i) control[1] = control[1] + 1;
    else {
      result.push( (control[1] == 1 ? '' : control[1]), control[0]);
      control = [i, 1];
    }
    if (indx == arr.length - 1) result.push((control[1] == 1 ? '' : control[1]), control[0], );
  })
  return result.join('');
}

module.exports = {
  encodeLine
};
