/**
 * 给定一个整数数组和一个整数k，
 * 判断数组中是否存在两个不同的索引i和j，使得nums[i]=nums[j]，并且i和j的差的绝对值最大为k。
 * 示例1:
 * 输入: nums = [1,2,3,1], k = 3
 * 输出: true
 * 示例2:
 * 输入: nums = [1,0,1,1], k = 1
 * 输出: true
 * 示例3:
 * 输入: nums = [1,2,3,1,2,3], k = 2
 * 输出: false
 */
var containsNearbyDuplicate = function(nums, k) {
  // 1、暴力法，自己想的
  // if (nums.length < 2) {
  //   return false;
  // }
  // for (let i = 0; i < nums.length; i++) {
  //   for (let j = i + 1; j <= i + k && j < nums.length; j++) {
  //     if (nums[j] === nums[i]) {
  //       return true;
  //     }
  //   }
  // }
  // return false;
  // 2、散列表
  const set = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      return true;
    }
    set.add(nums[i]);
    if (set.size > k) {
      set.delete(nums[i - k]);
    }
  }
  return false;
};

module.exports = containsNearbyDuplicate;
