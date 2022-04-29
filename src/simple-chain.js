const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  result: [],

  getLength() {
    return this.result.length;
  },
  addLink(str) {
    this.result.push(str);
    return this;
  },
  removeLink(pos) {
    if (typeof pos !== 'number' || !Number.isInteger(pos) || pos < 1 || pos > this.result.length) {
      this.result = [];
      throw new Error ("You can't remove incorrect link!");
    }
    let newResult = this.result.slice(0, pos - 1);
    newResult.push(...this.result.slice(pos));
    this.result = [...newResult];
    return this;
  },
  reverseChain() {
    this.result.reverse();
    return this;
  },
  finishChain() {
    const chain = this.result.map((i, x) => {
      return `( ${i} )` + ((x === this.result.length - 1) ? '' : '~~');
    }).join('');
    this.result = [];
    return `${chain}`;
  }
};

module.exports = {
  chainMaker
};
