const expect = require('expect.js');
const myPow = require('./index');

describe('实现pow(x,n)函数', () => {
  it('输入: 2.00000, 10输出1024.00000', () => {
    const result = myPow(2.0, 10);
    expect(result).to.be(1024.0);
  });
  it('输入: 2.10000, 3输出9.26100', () => {
    const result = myPow(2.1, 3);
    expect(result.toFixed(3)).to.be('9.261');
  });
  it('输入: 2.00000, -2输出0.25000', () => {
    const result = myPow(2.0, -2);
    expect(result).to.be(0.25);
  });
});
