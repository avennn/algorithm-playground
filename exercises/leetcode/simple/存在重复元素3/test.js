const expect = require('expect.js');
const containsNearbyAlmostDuplicate = require('./index');

describe('存在重复元素3', () => {
  it('输入nums = [1,2,3,1], k = 3, t = 0输出true', () => {
    const result = containsNearbyAlmostDuplicate([1, 2, 3, 1], 3, 0);
    expect(result).to.be(true);
  });
  it('输入nums = [1,0,1,1], k = 1, t = 2输出true', () => {
    const result = containsNearbyAlmostDuplicate([1, 0, 1, 1], 1, 2);
    expect(result).to.be(true);
  });
  it('输入nums = [1,5,9,1,5,9], k = 2, t = 3输出false', () => {
    const result = containsNearbyAlmostDuplicate([1, 5, 9, 1, 5, 9], 2, 3);
    expect(result).to.be(false);
  });
});
