const expect = require('expect.js');
const fractionToDecimal = require('./index');

describe('分数到小数', () => {
  it('输入numerator = 1, denominator = 2输出0.5', () => {
    const result = fractionToDecimal(1, 2);
    expect(result).to.be('0.5');
  });
  it('输入numerator = 2, denominator = 1输出2', () => {
    const result = fractionToDecimal(2, 1);
    expect(result).to.be('2');
  });
  it('输入numerator = 2, denominator = 3输出0.(6)', () => {
    const result = fractionToDecimal(2, 3);
    expect(result).to.be('0.(6)');
  });
});
