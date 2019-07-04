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
const permute = function(nums) {
  const n = nums.length;
  const result = [];
  function backTrack(arr, first) {
    if (first === n) {
      result.push(arr);
    }
    for (let i = first; i < n; i++) {
      const list = swap(arr, first, i);
      backTrack(list, first + 1);
    }
  }
  function swap(nums, i, j) {
    const arr = [...nums];
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    return arr;
  }
  backTrack(nums, 0);
  return result;
};

module.exports = permute;
