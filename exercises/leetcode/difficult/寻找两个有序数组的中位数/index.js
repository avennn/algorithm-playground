/**
 * 给定两个大小为 m 和 n的有序数组nums1和nums2。
 * 请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为O(log(m + n))。
 * 你可以假设nums1和nums2不会同时为空。
 * ===================
 * 示例1
 * nums1 = [1, 3]
 * nums2 = [2]
 * 则中位数是 2.0
 * 示例2
 * nums1 = [1, 2]
 * nums2 = [3, 4]
 * 则中位数是 (2 + 3)/2 = 2.5
 */
// 归并排序？
const findMedianSortedArrays = function(nums1, nums2) {
  const arr = [];
  let left = null;
  let right = null;
  while (nums1.length || nums2.length) {
    if (left === null && nums1.length) {
      left = nums1.shift();
    }
    if (right === null && nums2.length) {
      right = nums2.shift();
    }
    if (left === null && right !== null) {
      arr.push(right);
      right = null;
    } else if (left !== null && right === null) {
      arr.push(left);
      left = null;
    } else if (left <= right) {
      arr.push(left);
      left = null;
    } else {
      arr.push(right);
      right = null;
    }
  }
  if (left !== null) {
    arr.push(left);
  }
  if (right !== null) {
    arr.push(right);
  }
  const len = arr.length;
  let leftIndex = 0;
  let rightIndex = 0;
  const mid = len / 2;
  if (len % 2) {
    leftIndex = rightIndex = Math.floor(mid);
  } else {
    leftIndex = mid - 1;
    rightIndex = mid;
  }
  return (arr[leftIndex] + arr[rightIndex]) / 2;
};

module.exports = findMedianSortedArrays;
