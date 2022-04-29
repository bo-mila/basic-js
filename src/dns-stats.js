const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const arr = [];
  const obj = {};
  for (let i = 0; i < domains.length; i++) {
    const a = domains[i].split('.').reverse().map(i => `.${i}`);
    a.map((item, indx) => {
      obj[`${a.slice(0, (indx + 1)).join('')}`] = 0;
      return item;
    });
    arr.push(a.join(''));
  }

  const objKeys = Object.keys(obj);
  for (let i = 0; i < arr.length; i++) {
    objKeys.map(item => {
      obj[item] = obj[item] + (arr[i].includes(item) ? 1 : 0);
    })
  }
  return obj;
}

module.exports = {
  getDNSStats
};
