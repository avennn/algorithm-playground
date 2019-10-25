/**
 * 给定一个整数数组，判断是否存在重复元素。
 * 如果任何值在数组中出现至少两次，函数返回true。
 * 如果数组中每个元素都不相同，则返回false。
 * 示例1:
 * 输入: [1,2,3,1]
 * 输出: true
 * 示例2:
 * 输入: [1,2,3,4]
 * 输出: false
 * 示例3:
 * 输入: [1,1,1,3,3,4,3,2,4,2]
 * 输出: true
 */
var containsDuplicate = function(nums) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const item = nums[i];
    if (!map[item]) {
      map[item] = 1;
    } else {
      return true;
    }
  }
  return false;
};

module.exports = containsDuplicate;
