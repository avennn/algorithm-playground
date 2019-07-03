/**
 * 假设按照升序排序的数组在预先未知的某个点上进行了旋转。
 * 例如，数组[0,1,2,4,5,6,7]可能变为[4,5,6,7,0,1,2]。
 * 搜索一个给定的目标值，如果数组中存在这个目标值，则返回它的索引，否则返回-1。
 * 你可以假设数组中不存在重复的元素。
 * 你的算法时间复杂度必须是O(logn)级别。
 * 示例1
 * 输入: nums = [4,5,6,7,0,1,2], target = 0
 * 输出: 4
 * 示例2
 * 输入: nums = [4,5,6,7,0,1,2], target = 3
 * 输出: -1
 */

const search = function(nums, target) {
  if (!nums.length) {
    return -1;
  }
  if (target < nums[0]) {
    for (let i = nums.length - 1; i >= 0; i--) {
      if (target === nums[i]) {
        return i;
      } else if (i < 1 || nums[i - 1] > nums[i]) {
        return -1;
      }
    }
  } else {
    for (let j = 0; j < nums.length; j++) {
      if (target === nums[j]) {
        return j;
      } else if (j === nums.length - 1 || nums[j + 1] < nums[j]) {
        return -1;
      }
    }
  }
};

module.exports = search;
