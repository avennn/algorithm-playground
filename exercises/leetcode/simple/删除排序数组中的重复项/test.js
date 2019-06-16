const expect = require('expect.js');
const removeDuplicates = require('./index');

describe('删除排序数组中的重复项', () => {
  it('[1]删除重复项，返回数组长度，应为1', () => {
    expect(removeDuplicates([1])).to.be(1);
  });
  it('[1,1,2]删除重复项，返回数组长度，应为2', () => {
    expect(removeDuplicates([1, 1, 2])).to.be(2);
  });
  it('[0,0,1,1,1,2,2,3,3,4]删除重复项，返回数组长度，应为2', () => {
    expect(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])).to.be(5);
  });
});
