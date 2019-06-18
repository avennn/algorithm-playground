/**
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。
 * 如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
 * 你可以假设数组中无重复元素。
 * 示例1
 * 输入: [1,3,5,6], 5
 * 输出: 2
 * 示例2
 * 输入: [1,3,5,6], 2
 * 输出: 1
 * 示例3
 * 输入: [1,3,5,6], 7
 * 输出: 4
 * 示例4
 * 输入: [1,3,5,6], 0
 * 输出: 0
 */
const searchInsert = function(nums, target) {
  // 1.暴力法
  // if (!nums.length) {
  //   return 0;
  // }
  // for (let i = 0; i < nums.length; i++) {
  //   if (nums[i] >= target) {
  //     return i;
  //   }
  // }
  // return nums.length;

  // 2. 二分法
  if (!nums.length) {
    return 0;
  }
  let lo = 0;
  let hi = nums.length - 1;
  while (lo <= hi) {
    const mid = Math.floor((hi + lo) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }
  return lo;
};

module.exports = searchInsert;
