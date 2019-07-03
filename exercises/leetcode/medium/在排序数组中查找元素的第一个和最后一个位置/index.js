/**
 * 给定一个按照升序排列的整数数组nums，和一个目标值target。找出给定目标值在数组中的开始位置和结束位置。
 * 你的算法时间复杂度必须是O(log n)级别。
 * 如果数组中不存在目标值，返回[-1, -1]。
 * 示例1
 * 输入: nums = [5,7,7,8,8,10], target = 8
 * 输出: [3,4]
 * 示例2
 * 输入: nums = [5,7,7,8,8,10], target = 6
 * 输出: [-1,-1]
 */

const searchRange = function(nums, target) {
  if (!nums.length) {
    return [-1, -1];
  }
  let left = 0;
  let right = nums.length - 1;
  let mid = Math.floor((right + left) / 2);
  while (nums[mid] !== target && left < right) {
    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
    mid = Math.floor((right + left) / 2);
  }
  if (nums[mid] !== target) {
    return [-1, -1];
  }

  let lo = left;
  let hi = right;
  if (nums[lo] !== target) {
    lo = mid;
  }
  if (nums[hi] !== target) {
    hi = mid;
  }
  // 优化：再用二分法找出下边界
  while (nums[lo] === target) {
    lo--;
  }
  // 优化：再用二分法找出上边界
  while (nums[hi] === target) {
    hi++;
  }
  return [lo + 1, hi - 1];
};

module.exports = searchRange;
