/**
 * 给定一个包含n个整数的数组nums，判断nums中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？
 * 找出所有满足条件且不重复的三元组。
 * 注意：答案中不可以包含重复的三元组。
 * 例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]，
 * 满足要求的三元组集合为：
 * [
 *   [-1, 0, 1],
 *   [-1, -1, 2]
 * ]
 */

const threeSum = function(nums) {
  function findTwoSum(twoSumTarget, index) {
    const arr = [];
    for (let j = index + 1; j < nums.length - 1; j++) {
      if (j === index + 1 || nums[j] !== nums[j - 1]) {
        const target = twoSumTarget - nums[j];
        for (let k = j + 1; k < nums.length; k++) {
          if ((k === j + 1 || nums[k] !== nums[k - 1]) && nums[k] === target) {
            arr.push([nums[j], target]);
          }
        }
      }
    }
    return arr;
  }
  const arr = [];
  const sortedNums = nums.sort((a, b) => a - b);
  for (let i = 0; i < sortedNums.length - 2; i++) {
    if (i === 0 || nums[i] !== nums[i - 1]) {
      const target = -sortedNums[i];
      const arrs = findTwoSum(target, i);
      for (let m = 0; m < arrs.length; m++) {
        arr.push([nums[i]].concat(arrs[m]));
      }
    }
  }
  return arr;
};

module.exports = threeSum;
