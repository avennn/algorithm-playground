const expect = require('expect.js');
const firstMissingPositive = require('./index');

describe('缺失的第一个正数', () => {
  it('输入[1,2,0]输出3', () => {
    const result = firstMissingPositive([1, 2, 0]);
    expect(result).to.be(3);
  });
  it('输入[3,4,-1,1]输出2', () => {
    const result = firstMissingPositive([3, 4, -1, 1]);
    expect(result).to.be(2);
  });
  it('输入[7,8,9,11,12]输出1', () => {
    const result = firstMissingPositive([7, 8, 9, 11, 12]);
    expect(result).to.be(1);
  });
});
