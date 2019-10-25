const expect = require('expect.js');
const containsNearbyDuplicate = require('./index');

describe('存在重复元素2', () => {
  it('输入nums = [1,2,3,1], k = 3输出true', () => {
    const result = containsNearbyDuplicate([1, 2, 3, 1], 3);
    expect(result).to.be(true);
  });
  it('输入nums = [1,0,1,1], k = 1输出true', () => {
    const result = containsNearbyDuplicate([1, 0, 1, 1], 1);
    expect(result).to.be(true);
  });
  it('输入nums = [1,2,3,1,2,3], k = 2输出false', () => {
    const result = containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2);
    expect(result).to.be(false);
  });
});
