const expect = require('expect.js');
const climbStairs = require('./index');

describe('x的平方根', () => {
  it('爬2阶楼梯有2种方式', () => {
    const result = climbStairs(2);
    expect(result).to.be(2);
  });
  it('爬3阶楼梯有3种方式', () => {
    const result = climbStairs(3);
    expect(result).to.be(3);
  });
});
