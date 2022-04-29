const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(arg) {
  if (!Array.isArray(arg)) return false;
  const arr = arg.filter(i => typeof i === 'string').map(i => i.trim()[0].toUpperCase()).sort().join('');

  return arr;
}

module.exports = {
  createDreamTeam
};
