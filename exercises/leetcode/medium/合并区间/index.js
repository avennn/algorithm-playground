/**
 * 给出一个区间的集合，请合并所有重叠的区间。
 * 示例1:
 * 输入: [[1,3],[2,6],[8,10],[15,18]]
 * 输出: [[1,6],[8,10],[15,18]]
 * 解释: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6]
 * 示例2:
 * 输入: [[1,4],[4,5]]
 * 输出: [[1,5]]
 * 解释: 区间 [1,4] 和 [4,5] 可被视为重叠区间。
 */
const merge = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let index = 0;
  function canMerge(a, b) {
    return a[1] >= b[0];
  }
  function merge(a, b) {
    return [Math.min(a[0], b[0]), Math.max(a[1], b[1])];
  }
  while (index < intervals.length - 1) {
    const a = intervals[index];
    const b = intervals[index + 1];
    if (canMerge(a, b)) {
      const m = merge(a, b);
      intervals.splice(index, 2, m);
    } else {
      index++;
    }
  }
  return intervals;
};

module.exports = merge;
