const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(ins = true) {
    this.ins = ins;
    this.alph = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  encrypt(string, key) {
    if (arguments.length < 2 || string == undefined || key == undefined) throw new Error('Incorrect arguments!');
    const str = [...string];

    let fullKey = key.repeat(Math.floor(str.length / key.length)) + key.slice(0, str.length % key.length);
    const res = str.map((item, i) => {
      if (!this.alph.includes(item.toUpperCase())) {
        fullKey = fullKey.slice(0, i) + ' ' + fullKey.slice(i);
        return item;
      }
      const w = this.alph.indexOf(item.toUpperCase());
      const k = this.alph.indexOf(fullKey[i].toUpperCase());
      const ind = (w + k) % this.alph.length;

      return this.alph[ind].toUpperCase();
    });

    return this.ins ? res.join('') : res.reverse().join('');
  }
  decrypt(string, key) {
    if (arguments.length < 2 || string == undefined || key == undefined) throw new Error('Incorrect arguments!');
    const str = [...string];
    let fullKey = key.repeat(Math.floor(str.length / key.length)) + key.slice(0, str.length % key.length);
    const res = str.map((item, i) => {
      if (!this.alph.includes(item.toUpperCase())) {
        fullKey = fullKey.slice(0, i) + ' ' + fullKey.slice(i);
        return item;
      }
      const w = this.alph.indexOf(item.toUpperCase());
      const k = this.alph.indexOf(fullKey[i].toUpperCase());
      const ind = (w - k) >= 0 ? ((w - k) % this.alph.length) : (this.alph.length - Math.abs(w - k));

      return this.alph[ind];
    });

    return this.ins ? res.join('') : res.reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
