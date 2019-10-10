/**
 * 给定一个非负整数数组，你最初位于数组的第一个位置。
 * 数组中的每个元素代表你在该位置可以跳跃的最大长度。
 * 判断你是否能够到达最后一个位置。
 * 示例1:
 * 输入: [2,3,1,1,4]
 * 输出: true
 * 解释: 从位置0到1跳1步, 然后跳3步到达最后一个位置。
 * 示例2:
 * 输入: [3,2,1,0,4]
 * 输出: false
 * 解释: 无论怎样，你总会到达索引为3的位置。但该位置的最大跳跃长度是0，所以你永远不可能到达最后一个位置。
 */
const canJump = function(nums) {
  function jumpable(endIndex, startIndex) {
    if (startIndex < 0) {
      return !endIndex;
    }
    const start = nums[startIndex];
    if (start + startIndex >= endIndex) {
      return jumpable(startIndex, startIndex - 1);
    } else {
      return jumpable(endIndex, startIndex - 1);
    }
  }
  const i = nums.length - 1;
  return jumpable(i, i - 1);
};

module.exports = canJump;
