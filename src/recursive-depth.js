const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr, argDepth = 1) {
    let depth = argDepth;
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        const depthOfRecurcive = this.calculateDepth(arr[i], argDepth + 1);
        depth = depth > depthOfRecurcive ? depth : depthOfRecurcive;
      }
    }
    return depth;
  }
}

module.exports = {
  DepthCalculator
};
