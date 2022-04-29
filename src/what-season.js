const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (arguments.length === 0) return 'Unable to determine the time of year!';

  try {
   const fake = (isNaN(date.getTimezoneOffset()));
  } catch {
    throw new Error('Invalid date!');
  }

  if (isNaN(Date.parse(date)) || isNaN(new Date(date))) throw new Error('Invalid date!'); //объекты, массивы, функции

  const month = date.getMonth();
  if (isNaN(month)) throw new Error('Invalid date!');
  return month < 2 ? 'winter' : month < 5 ? 'spring' : month < 8 ? 'summer' : month < 11 ? 'autumn' : 'winter';
  
}

module.exports = {
  getSeason
};
