/**
 * 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。
 * 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。
 * 问总共有多少条不同的路径？
 * 说明：m 和 n 的值均不超过 100。
 * 示例1：
 * 输入: m = 3, n = 2
 * 输出: 3
 * 解释:
 * 从左上角开始，总共有 3 条路径可以到达右下角。
 * 1. 向右 -> 向右 -> 向下
 * 2. 向右 -> 向下 -> 向右
 * 3. 向下 -> 向右 -> 向右
 * 示例2：
 * 输入: m = 7, n = 3
 * 输出: 28
 */
var uniquePaths = function(m, n) {
  // 1
  // const dp = [];
  // for (let i = 0; i < m; i++) {
  //   const arr = [];
  //   for (let j = 0; j < n; j++) {
  //     arr.push(1);
  //   }
  //   dp.push(arr);
  // }
  // for (let i = 0; i < n; i++) {
  //   dp[0][i] = 1;
  // }
  // for (let j = 0; j < m; j++) {
  //   dp[j][0] = 1;
  // }
  // for (let i = 1; i < m; i++) {
  //   for (let j = 1; j < n; j++) {
  //     dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
  //   }
  // }
  // return dp[m - 1][n - 1];

  // 2. 空间复杂度更优
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(1);
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      arr[j] += arr[j - 1];
    }
  }
  return arr[n - 1];
};
module.exports = uniquePaths;
