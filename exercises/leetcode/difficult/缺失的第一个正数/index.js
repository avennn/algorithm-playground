/**
 * 给定一个未排序的整数数组，找出其中没有出现的最小的正整数。
 * 示例1
 * 输入: [1,2,0]
 * 输出: 3
 * 示例2
 * 输入: [3,4,-1,1]
 * 输出: 2
 * 示例3
 * 输入: [7,8,9,11,12]
 * 输出: 1
 * 说明：
 * 你的算法的时间复杂度应为O(n)，并且只能使用常数级别的空间。
 */
const firstMissingPositive = function(nums) {
  // 参照题解
  const n = nums.length;
  let contains = 0;
  for (let index = 0; index < n; index++) {
    if (nums[index] === 1) {
      contains++;
      break;
    }
  }
  if (!contains) {
    return 1;
  }
  if (n === 1) {
    return 2;
  }
  for (let i = 0; i < n; i++) {
    if (nums[i] < 1 || nums[i] > n) {
      nums[i] = 1;
    }
  }
  for (let j = 0; j < n; j++) {
    const a = Math.abs(nums[j]);
    if (a === n) {
      nums[0] = -Math.abs(nums[0]);
    } else {
      nums[a] = -Math.abs(nums[a]);
    }
  }
  for (let k = 1; k < n; k++) {
    if (nums[k] > 0) {
      return k;
    }
  }
  if (nums[0] > 0) {
    return n;
  }
  return n + 1;
};

module.exports = firstMissingPositive;
