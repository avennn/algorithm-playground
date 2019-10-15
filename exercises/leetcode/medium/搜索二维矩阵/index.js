/**
 * 编写一个高效的算法来判断mxn矩阵中，是否存在一个目标值。该矩阵具有如下特性：
 * 每行中的整数从左到右按升序排列。
 * 每行的第一个整数大于前一行的最后一个整数
 * 示例1：
 * 输入:
 * matrix = [
 *  [1,   3,  5,  7],
 *  [10, 11, 16, 20],
 *  [23, 30, 34, 50]
 * ]
 * target = 3
 * 输出: true
 * 示例2:
 * 输入:
 * matrix = [
 * [1,   3,  5,  7],
 * [10, 11, 16, 20],
 * [23, 30, 34, 50]
 * ]
 * target = 13
 * 输出: false
 */
var searchMatrix = function(matrix, target) {
  const m = matrix.length;
  if (!m) {
    return false;
  }
  const n = matrix[0].length;
  if (!n) {
    return false;
  }
  let row = -1;
  for (let i = m - 1; i >= 0; i--) {
    if (matrix[i][n - 1] === target) {
      return true;
    }
    if (matrix[i][n - 1] > target) {
      row = i;
    }
  }
  if (row > -1) {
    for (let j = n - 1; j >= 0; j--) {
      if (matrix[row][j] === target) {
        return true;
      }
    }
  }
  return false;
  // better：二分查找
};

module.exports = searchMatrix;
