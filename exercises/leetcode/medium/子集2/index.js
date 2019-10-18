/**
 * 给定一个可能包含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
 * 说明：解集不能包含重复的子集。
 * 示例：
 * 输入: [1,2,2]
 * 输出:
 * [
 *   [2],
 *   [1],
 *   [1,2,2],
 *   [2,2],
 *   [1,2],
 *   []
 * ]
 */
var subsetsWithDup = function(nums) {
  nums.sort((a, b) => a - b);
  const result = [];
  function backTrack(depth, tmp) {
    result.push([...tmp]);
    for (let i = depth; i < nums.length; i++) {
      if (i > depth && nums[i - 1] === nums[i]) {
        continue;
      }
      tmp.push(nums[i]);
      backTrack(i + 1, tmp);
      tmp.pop();
    }
  }
  backTrack(0, []);
  return result;
};

module.exports = subsetsWithDup;
