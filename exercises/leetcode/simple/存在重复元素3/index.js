/**
 * 给定一个整数数组，判断数组中是否有两个不同的索引i和j，
 * 使得nums[i]和nums[j]的差的绝对值最大为t，并且i和j之间的差的绝对值最大为ķ。
 * 示例1:
 * 输入: nums = [1,2,3,1], k = 3, t = 0
 * 输出: true
 * 示例2:
 * 输入: nums = [1,0,1,1], k = 1, t = 2
 * 输出: true
 * 示例3:
 * 输入: nums = [1,5,9,1,5,9], k = 2, t = 3
 * 输出: false
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
  if (nums.length < 2 || t < 0) {
    return false;
  }
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const item = nums[i];
    const w = t + 1;
    const m = getId(item, w);
    if (map[m] !== undefined) {
      return true;
    }
    if (map[m - 1] !== undefined && Math.abs(map[m - 1] - nums[i]) < w) {
      return true;
    }
    if (map[m + 1] !== undefined && Math.abs(map[m + 1] - nums[i]) < w) {
      return true;
    }
    map[m] = item;
    if (i >= k) {
      delete map[getId(nums[i - k], w)];
    }
  }
  return false;
  function getId(item, w) {
    return Math.floor(item / w);
  }
};

module.exports = containsNearbyAlmostDuplicate;
