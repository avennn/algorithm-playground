/**
 * https://leetcode-cn.com/problems/container-with-most-water/
 * 给定 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。
 * 在坐标内画n条垂直线，垂直线i的两个端点分别为(i, ai) 和 (i, 0)。
 * 找出其中的两条线，使得它们与x轴共同构成的容器可以容纳最多的水。
 * 说明：你不能倾斜容器，且 n 的值至少为 2。
 * 示例
 * 输入: [1,8,6,2,5,4,8,3,7]
 * 输出: 49
 */
const maxArea = function(heights) {
  // 1.暴力法
  // let max = 0;
  // for (let i = 0; i < heights.length - 1; i++) {
  //   for (let j = 1; j < heights.length; j++) {
  //     const distance = j - i;
  //     const h = Math.min(heights[i], heights[j]);
  //     max = Math.max(max, distance * h);
  //   }
  // }
  // return max;

  // 2.双指针法
  let i = 0;
  let j = heights.length - 1;
  let maxArea = 0;
  let left = heights[i];
  let right = heights[j];
  while (i < j) {
    if (left <= right) {
      maxArea = Math.max(maxArea, left * (j - i));
      left = heights[++i];
    } else {
      maxArea = Math.max(maxArea, right * (j - i));
      right = heights[--j];
    }
  }
  return maxArea;
};

module.exports = maxArea;
