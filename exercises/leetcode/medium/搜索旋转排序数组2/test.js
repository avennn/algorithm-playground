const expect = require('expect.js');
const removeDuplicates = require('./index');

describe('搜索旋转排序数组2', () => {
  it('输入: nums = [2,5,6,0,0,1,2], target = 0，输出true', () => {
    const result = removeDuplicates([2, 5, 6, 0, 0, 1, 2], 0);
    expect(result).to.be(true);
  });
  it('输入: nums = [2,5,6,0,0,1,2], target = 3，输出false', () => {
    const result = removeDuplicates([2, 5, 6, 0, 0, 1, 2], 3);
    expect(result).to.be(false);
  });
});
