const expect = require('expect.js');
const mySqrt = require('./index');

describe('x的平方根', () => {
  it('输入4结果为2', () => {
    const result = mySqrt(4);
    expect(result).to.be(2);
  });
  it('输入8结果为2', () => {
    const result = mySqrt(8);
    expect(result).to.be(2);
  });
});
