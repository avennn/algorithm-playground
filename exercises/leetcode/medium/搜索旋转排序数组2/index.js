/**
 * 假设按照升序排序的数组在预先未知的某个点上进行了旋转。
 * ( 例如，数组[0,0,1,2,2,5,6]可能变为[2,5,6,0,0,1,2])。
 * 编写一个函数来判断给定的目标值是否存在于数组中。若存在返回true，否则返回false。
 * 示例1:
 * 输入: nums = [2,5,6,0,0,1,2], target = 0
 * 输出: true
 * 示例2:
 * 输入: nums = [2,5,6,0,0,1,2], target = 3
 * 输出: false
 * 进阶:
 * 这是 搜索旋转排序数组 的延伸题目，本题中的 nums  可能包含重复元素。
 * 这会影响到程序的时间复杂度吗？会有怎样的影响，为什么？
 */
var search = function(nums, target) {
  if (nums.length < 2) {
    return nums[0] === target;
  }
  let start = nums[0];
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === target || nums[i + 1] === target) {
      return true;
    }
    if (nums[i + 1] < nums[i]) {
      if (target > start || target < nums[i + 1]) {
        return false;
      }
    }
  }
  return false;
};

module.exports = search;
