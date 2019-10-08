const expect = require('expect.js');
const merge = require('./index');

describe('合并两个有序数组', () => {
  it('[1,2,3,0,0,0]与[2,5,6]合并', () => {
    const nums1 = [1, 2, 3, 0, 0, 0];
    merge(nums1, 3, [2, 5, 6], 3);
    expect(nums1).to.have.length(6);
    expect(nums1[0]).to.be(1);
    expect(nums1[5]).to.be(6);
  });
});
