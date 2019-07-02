/**
 * 给定一个无重复元素的数组candidates和一个目标数target，找出candidates中所有可以使数字和为target的组合。
 * candidates中的每个数字在每个组合中只能使用一次。
 * 说明：
 * 所有数字（包括 target）都是正整数。
 * 解集不能包含重复的组合。
 * 示例1
 * 输入: candidates = [10,1,2,7,6,1,5], target = 8,
 * 所求解集为:
 * [
 *   [1,7],
 *   [1,2,5],
 *   [2,6],
 *   [1,1,6]
 * ]
 * 示例2
 * 输入: candidates = [2,3,5], target = 5,所求解集为:
 * [
 *   [1,2,2],
 *   [5]
 * ]
 */
const combinationSum2 = function(candidates, target) {
  function backTrack(start, acc, list) {
    if (acc === target) {
      result.push(list);
    }
    for (let i = start; i < n; i++) {
      if (candidates[i] + acc > target) {
        break;
      }
      if (i > start && candidates[i] === candidates[i - 1]) {
        continue;
      }
      backTrack(i + 1, acc + candidates[i], [...list, candidates[i]]);
    }
  }

  if (!candidates.length) {
    return [];
  }
  candidates.sort((a, b) => a - b);
  const result = [];
  const n = candidates.length;
  backTrack(0, 0, []);
  return result;
};

module.exports = combinationSum2;
