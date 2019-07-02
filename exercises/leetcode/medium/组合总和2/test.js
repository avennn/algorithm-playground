const expect = require('expect.js');
const combinationSum2 = require('./index');

describe('组合总和2', () => {
  it('candidates=[10,1,2,7,6,1,5], target=8, 解集[[7], [2,2,3]]', () => {
    const res = combinationSum2([10, 1, 2, 7, 6, 1, 5], 8);
    expect(res).to.have.length(4);
  });
  it('candidates=[2,3,5], target=5, 解集[[1,2,2], [5]]', () => {
    const res = combinationSum2([2, 3, 5], 5);
    expect(res).to.have.length(2);
  });
});
