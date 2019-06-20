/**
 * 给定一个包括n个整数的数组nums和一个目标值target。找出nums中的三个整数，使得它们的和与target最接近。返回这三个数的和。假定每组输入只存在唯一答案。
 * 示例
 * 例如，给定数组nums = [-1，2，1，-4], 和target = 1.
 * 与target最接近的三个数的和为2. (-1 + 2 + 1 = 2).
 */
const threeSumClosest = function(nums, target) {
  // 参照精选题解
  nums.sort((a, b) => a - b);
  let ans = nums[0] + nums[1] + nums[2];
  for (let i = 0; i < nums.length - 2; i++) {
    let start = i + 1;
    let end = nums.length - 1;
    while (start < end) {
      const sum = nums[i] + nums[start] + nums[end];
      if (sum === target) {
        return sum;
      }
      if (Math.abs(target - sum) < Math.abs(target - ans)) {
        ans = sum;
      } else if (sum > target) {
        end--;
      } else if (sum < target) {
        start++;
      }
    }
  }
  return ans;
};

module.exports = threeSumClosest;
