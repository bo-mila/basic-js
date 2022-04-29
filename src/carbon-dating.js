const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */

// k = 0.693 / HALF_LIFE_PERIOD
// t = ln(15 / str) / k
function dateSample(str) {
  const x = parseFloat(str);
  if (arguments.length == 0 || Number.isNaN(x) || str.length == 0 || !(typeof str == 'string')) return false;
  if (x >= 15 || x <= 0) return false;
  const k = 0.693 / HALF_LIFE_PERIOD;
  const t = Math.log(15 / x) / k;
  return Math.ceil(t);
}

module.exports = {
  dateSample
};
