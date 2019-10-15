/**
 * 给定一个mxn的矩阵，如果一个元素为0，则将其所在行和列的所有元素都设为0。请使用原地算法。
 * 示例1:
 * 输入:
 * [
 *   [1,1,1],
 *   [1,0,1],
 *   [1,1,1]
 * ]
 * 输出:
 * [
 *   [1,0,1],
 *   [0,0,0],
 *   [1,0,1]
 * ]
 * 示例2:
 * 输入:
 * [
 *   [0,1,2,0],
 *   [3,4,5,2],
 *   [1,3,1,5]
 * ]
 * 输出:
 * [
 *   [0,0,0,0],
 *   [0,4,5,0],
 *   [0,3,1,0]
 * ]
 * 进阶：
 * 一个直接的解决方案是使用O(mn)的额外空间，但这并不是一个好的解决方案。
 * 一个简单的改进方案是使用O(m+n)的额外空间，但这仍然不是最好的解决方案。
 * 你能想出一个常数空间的解决方案吗？
 */
var setZeroes = function(matrix) {
  let rowLen = matrix.length;
  let colLen = matrix[0].length;
  for (let i = 0; i < rowLen; i++) {
    for (let j = 0; j < colLen; j++) {
      if (matrix[i][j] == 0) {
        for (let rowI = 0; rowI < rowLen; rowI++) {
          if (matrix[rowI][j] != 0) {
            matrix[rowI][j] = true;
          }
        }
        for (let colI = 0; colI < colLen; colI++) {
          if (matrix[i][colI] != 0) {
            matrix[i][colI] = true;
          }
        }
      }
    }
  }
  for (let i = 0; i < rowLen; i++) {
    for (let j = 0; j < colLen; j++) {
      if (typeof matrix[i][j] == 'boolean') {
        matrix[i][j] = 0;
      }
    }
  }
  return matrix;
};

module.exports = setZeroes;
