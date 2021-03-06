const expect = require('expect.js');
const twoSum = require('./index');

describe('两数之和', () => {
  const nums = [2, 7, 11, 15];
  it('[2, 7, 11, 15]中和为9的两个数的下标返回[0, 1]', () => {
    const result = twoSum(nums, 9);
    expect(result).to.eql([0, 1]);
  });
  it('[2, 7, 11, 15]中和为18的两个数的下标返回[1, 2]', () => {
    const result = twoSum(nums, 18);
    expect(result).to.eql([1, 2]);
  });
  it('[2, 7, 11, 15]中和为20的两个数的下标返回[]', () => {
    const result = twoSum(nums, 20);
    expect(result).to.be.empty();
  });
});
