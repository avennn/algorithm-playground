const expect = require('expect.js');
const findMedianSortedArrays = require('./index');

describe('寻找两个有序数组的中位数', () => {
  it('[1, 3]和[2]的中位数为2.0', () => {
    const num = findMedianSortedArrays([1, 3], [2]);
    expect(num).to.be(2);
  });
  it('[1, 2]和[3, 4]的中位数为2.5', () => {
    const num = findMedianSortedArrays([1, 2], [3, 4]);
    expect(num).to.be(2.5);
  });
});
