const expect = require('expect.js');
const intToRoman = require('./index');

describe('整数转罗马数字', () => {
  it('3转成III', () => {
    expect(intToRoman(3)).to.be('III');
  });
  it('4转成IV', () => {
    expect(intToRoman(4)).to.be('IV');
  });
  it('9转成IX', () => {
    expect(intToRoman(9)).to.be('IX');
  });
  it('58转成LVIII', () => {
    expect(intToRoman(58)).to.be('LVIII');
  });
  it('1994转成MCMXCIV', () => {
    expect(intToRoman(1994)).to.be('MCMXCIV');
  });
});
