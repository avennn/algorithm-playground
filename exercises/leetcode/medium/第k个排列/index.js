/**
 * 给出集合 [1,2,3,…,n]，其所有元素共有n!种排列。
 * 按大小顺序列出所有排列情况，并一一标记，当 n = 3 时, 所有排列如下：
 * '123','132','213','231','312','321'
 * 给定 n 和 k，返回第 k 个排列。
 * 说明：
 * 给定 n 的范围是 [1, 9]。
 * 给定 k 的范围是[1,  n!]。
 * 示例1:
 * 输入: n = 3, k = 3
 * 输出: "213"
 * 示例2:
 * 输入: n = 4, k = 9
 * 输出: "2314"
 */
const getPermutation = function(n, k) {
  const nums = [];
  const used = [];
  for (let i = 0; i < n; i++) {
    nums[i] = i + 1;
    used[i] = false;
  }
  const pre = [];
  return dfs(nums, used, n, k, 0, pre);

  function factorial(m, prev = 1) {
    if (m <= 1) {
      return prev;
    }
    return factorial(m - 1, m * prev);
  }

  function dfs(nums, used, n, k, depth, pre) {
    if (depth === n) {
      return pre.join('');
    }
    const ps = factorial(n - 1 - depth);
    for (let i = 0; i < n; i++) {
      if (used[i]) {
        continue;
      }
      if (ps < k) {
        k -= ps;
        continue;
      }
      pre.push(nums[i]);
      used[i] = true;
      return dfs(nums, used, n, k, depth + 1, pre);
    }
  }
};

module.exports = getPermutation;
