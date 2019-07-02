/**
 * 给定一个无重复元素的数组candidates和一个目标数target，找出candidates中所有可以使数字和为target的组合。
 * candidates中的数字可以无限制重复被选取。
 * 说明：
 * 所有数字（包括 target）都是正整数。
 * 解集不能包含重复的组合。
 * 示例1
 * 输入: candidates = [2,3,6,7], target = 7,
 * 所求解集为:
 * [
 *   [7],
 *   [2,2,3]
 * ]
 * 示例2
 * 输入: candidates = [2,3,5], target = 8,所求解集为:
 * [
 *   [2,2,2,2],
 *   [2,3,3],
 *   [3,5]
 * ]
 */
const combinationSum = function(candidates, target) {
  function findNextNum(arr, acc, originArr) {
    if (acc === target) {
      result.push(arr);
    } else if (acc < target) {
      const t = target - acc;
      const oa = originArr.filter(item => item <= t);
      if (oa.length) {
        for (let i = 0; i < oa.length; i++) {
          const nextArr = [...arr];
          nextArr.push(oa[i]);
          const a = acc + oa[i];
          const noa = [...oa];
          noa.splice(0, i);
          findNextNum(nextArr, a, noa);
        }
      }
    }
  }

  if (!candidates.length) {
    return [];
  }
  const lArr = candidates.sort((a, b) => a - b).filter(c => c <= target);
  let cursor = 0;
  for (let k = 1; k < lArr.length; k++) {
    if (lArr[k] !== lArr[k - 1]) {
      lArr[++cursor] = lArr[k];
    }
  }
  const list = lArr.splice(0, cursor + 1);
  if (!list.length) {
    return [];
  }
  const result = [];

  findNextNum([], 0, list);
  return result;
};

module.exports = combinationSum;
