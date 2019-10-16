const expect = require('expect.js');
const subsets = require('./index');

describe('子集', () => {
  it('输入:nums=[1,2,3]，输出输出:[[3],[1],[2],[1,2,3],[1,3],[2,3],[1,2],[]]', () => {
    const result = subsets([1, 2, 3]);
    expect(result).to.have.length(8);
  });
});
