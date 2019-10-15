/**
 * 给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。
 * 示例：
 * 输入: n = 4, k = 2
 * 输出:
 * [
 *   [2,4],
 *   [3,4],
 *   [2,3],
 *   [1,2],
 *   [1,3],
 *   [1,4],
 * ]
 */
var combine = function(n, k) {
  if (k <= 0 || k > n) {
    return [];
  }
  const arr = [];
  function find(depth, start, prev) {
    if (depth === 0) {
      arr.push(prev);
      return;
    }
    for (let i = start; i < n + 1; i++) {
      const list = [...prev];
      list.push(i);
      find(depth - 1, i + 1, list);
    }
  }
  find(k, 1, []);
  return arr;
};

module.exports = combine;
