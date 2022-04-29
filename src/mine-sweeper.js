const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const mineArr = [];
  let res = [];
  for (let i = 0; i < matrix.length; i++) {
    arr = matrix[i].map((item, j) => {
      if (item) mineArr.push(`${i},${j}`);
    })
  }
  for (let i = 0; i < matrix.length; i++) {
    res.push(matrix[i].map((item, j) => {
      if (item === true) return 1;
      return +(mineArr.includes(`${i - 1},${j - 1}`)) +
                 +(mineArr.includes(`${i - 1},${j}`)) +
                 +(mineArr.includes(`${i - 1},${j + 1}`)) +
                 +(mineArr.includes(`${i},${j + 1}`)) +
                 +(mineArr.includes(`${i + 1},${j + 1}`)) +
                 +(mineArr.includes(`${i + 1},${j}`)) +
                 +(mineArr.includes(`${i + 1},${j - 1}`)) +
                 +(mineArr.includes(`${i},${j - 1}`));
    }));
  }
  return res;
}

module.exports = {
  minesweeper
};
