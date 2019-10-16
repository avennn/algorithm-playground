/**
 * 给定一组不含重复元素的整数数组nums，返回该数组所有可能的子集（幂集）。
 * 说明：解集不能包含重复的子集。
 * 示例：
 * 输入: nums = [1,2,3]
 * 输出:
 * [
 *   [3],
 *   [1],
 *   [2],
 *   [1,2,3],
 *   [1,3],
 *   [2,3],
 *   [1,2],
 *   []
 * ]
 */
var subsets = function(nums) {
  const result = [];
  function backTrack(depth, tmp) {
    result.push([...tmp]);
    for (let i = depth; i < nums.length; i++) {
      tmp.push(nums[i]);
      backTrack(i + 1, tmp);
      tmp.pop();
    }
  }
  backTrack(0, []);
  return result;
};

module.exports = subsets;
