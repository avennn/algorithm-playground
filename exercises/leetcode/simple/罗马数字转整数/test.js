const expect = require('expect.js');
const romanToInt = require('./index');

describe('罗马数字转整数', () => {
  it('III转成3', () => {
    expect(romanToInt('III')).to.be(3);
  });
  it('IV转成4', () => {
    expect(romanToInt('IV')).to.be(4);
  });
  it('IX转成9', () => {
    expect(romanToInt('IX')).to.be(9);
  });
  it('LVIII转成58', () => {
    expect(romanToInt('LVIII')).to.be(58);
  });
  it('MCMXCIV转成1994', () => {
    expect(romanToInt('MCMXCIV')).to.be(1994);
  });
});
