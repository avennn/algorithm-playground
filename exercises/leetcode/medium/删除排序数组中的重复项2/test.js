const expect = require('expect.js');
const removeDuplicates = require('./index');

describe('删除排序数组中的重复项2', () => {
  it('输入:[1,1,1,2,2,3]返回5', () => {
    const result = removeDuplicates([1, 1, 1, 2, 2, 3]);
    expect(result).to.be(5);
  });
  it('输入:[0,0,1,1,1,1,2,3,3]返回7', () => {
    const result = removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3]);
    expect(result).to.be(7);
  });
});
