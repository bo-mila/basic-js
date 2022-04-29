const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const zeroColumnIndex = [];
  let res = 0;
  for (let i = 0; i < matrix.length; i++) {
    matrix[i].map((item, indx) => {
      if (zeroColumnIndex.includes(indx)) return;
      if (item == 0) zeroColumnIndex.push(indx);
      else res = res + item;
    })
  }
  return res;
}

module.exports = {
  getMatrixElementsSum
};
