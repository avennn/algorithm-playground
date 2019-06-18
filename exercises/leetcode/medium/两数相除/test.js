const expect = require('expect.js');
const divide = require('./index');

describe('两数相除', () => {
  it('dividend = 10, divisor = 3，输出3', () => {
    const result = divide(10, 3);
    expect(result).to.be(3);
  });
  it('dividend = 7, divisor = -3，输出-3', () => {
    const result = divide(7, -3);
    expect(result).to.be(-2);
  });
  it('dividend = -2147483648, divisor = 1，输出-2147483648', () => {
    const result = divide(-2147483648, 1);
    expect(result).to.be(-2147483648);
  });
});
