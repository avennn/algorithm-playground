/**
 * 给定一个没有重复数字的序列，返回其所有可能的全排列。
 * 示例
 * 输入: [1,2,3]
 * 输出:
 * [
 *   [1,2,3],
 *   [1,3,2],
 *   [2,1,3],
 *   [2,3,1],
 *   [3,1,2],
 *   [3,2,1]
 * ]
 */
const permuteUnique = function(nums) {
  // 参考精选题解
  function findPermuteUnique(list, depth, stack) {
    if (depth === n) {
      result.push([...stack]);
      return;
    }
    for (let i = 0; i < n; i++) {
      if (!used[i]) {
        if (i > 0 && list[i] === list[i - 1] && !used[i - 1]) {
          continue;
        }
        used[i] = true;
        stack.push(list[i]);
        findPermuteUnique(list, depth + 1, stack);
        stack.pop();
        used[i] = false;
      }
    }
  }
  nums.sort((a, b) => a - b);
  const result = [];
  const n = nums.length;
  const used = [];
  findPermuteUnique(nums, 0, []);
  return result;
};

module.exports = permuteUnique;
