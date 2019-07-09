/**
 * 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
 * 示例
 * 输入: [0,1,0,2,1,0,1,3,2,1,2,1]
 * 输出: 6
 */
const trap = function(height) {
  let len = height.length;
  if (len < 3) {
    return 0;
  }
  let left = 0;
  let right = len - 1;
  let maxLeft = height[left];
  let maxRight = height[right];
  let ans = 0;
  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] >= maxLeft) {
        maxLeft = height[left];
      } else {
        ans += maxLeft - height[left];
      }
      left++;
    } else {
      if (height[right] >= maxRight) {
        maxRight = height[right];
      } else {
        ans += maxRight - height[right];
      }
      right--;
    }
  }
  return ans;
};

module.exports = trap;
