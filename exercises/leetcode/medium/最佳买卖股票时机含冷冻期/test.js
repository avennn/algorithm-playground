const expect = require('expect.js');
const maxProfit = require('./index');

describe('最佳买卖股票时机含冷冻期', () => {
  it('输入[1,2,3,0,2]输出3', () => {
    const result = maxProfit([1, 2, 3, 0, 2]);
    expect(result).to.eql(3);
  });
});
