const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(args) {
  if (!Array.isArray(args)) throw new Error("'arr' parameter must be an instance of the Array!");
  if (args.length === 0) return [];
  const controls = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];
  const arr = [...args];
  const arr2 = [];
  let double = false;
  let discard = false;
  for (let i = 0; i < arr.length; i++) {
    if (controls.includes(arr[i])) {
      const c = arr[i];
      if ((c === '--discard-next') && i !== arr.length - 1 ) {
        discard = true;
      }
      if (c === '--discard-prev' && i !== 0 ) {
        if (!(i > 1 && arr[i - 2] == '--discard-next')) arr2.pop();
      }
      if (c === '--double-next') {
        double = true;
      }
      if (c === '--double-prev' && i !== 0 && arr2.length !== 0) {
        if (!(i > 1 && arr[i - 2] == '--discard-next')) {
          arr2.push(arr[i - 1]);
        }
      }
    } else {
      if (discard) {
        discard = false;
        continue;
      }
      if (double) {
        arr2.push(arr[i], arr[i]);
        double = false;
        continue;
      }
      if (!discard && !double) {
        arr2.push(arr[i]);
      }
    }
  }
  return arr2;
}

module.exports = {
  transform
};
