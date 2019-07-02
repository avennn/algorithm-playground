const expect = require('expect.js');
const combinationSum = require('./index');

describe('组合总和', () => {
  it('candidates=[2,3,6,7], target=7, 解集[[7], [2,2,3]]', () => {
    const res = combinationSum([2, 3, 6, 7], 7);
    expect(res).to.have.length(2);
  });
  it('candidates=[2,3,5], target=8, 解集[[2,2,2,2], [2,3,3], [3,5]]', () => {
    const res = combinationSum([2, 3, 5], 8);
    expect(res).to.have.length(3);
  });
});
