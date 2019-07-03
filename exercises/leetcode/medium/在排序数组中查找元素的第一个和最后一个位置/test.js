const expect = require('expect.js');
const searchRange = require('./index');

describe('在排序数组中查找元素的第一个和最后一个位置', () => {
  it('nums = [5,7,7,8,8,10], target = 0输出[3, 4]', () => {
    const result = searchRange([5, 7, 7, 8, 8, 10], 8);
    expect(result).to.be.an('array');
    expect(result[0]).to.be(3);
    expect(result[1]).to.be(4);
  });
  it('nums = [5,7,7,8,8,10], target = 6输出[-1, -1]', () => {
    const result = searchRange([5, 7, 7, 8, 8, 10], 6);
    expect(result).to.be.an('array');
    expect(result[0]).to.be(-1);
    expect(result[1]).to.be(-1);
  });
});
