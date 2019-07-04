/**
 * 给定一个 n × n 的二维矩阵表示一个图像。将图像顺时针旋转 90 度。
 * 说明：你必须在原地旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要使用另一个矩阵来旋转图像。
 * 给定 matrix = 
  [
    [1,2,3],
    [4,5,6],
    [7,8,9]
  ]
  原地旋转输入矩阵，使其变为:
  [
    [7,4,1],
    [8,5,2],
    [9,6,3]
  ]
  示例2
  给定 matrix =
  [
    [ 5, 1, 9,11],
    [ 2, 4, 8,10],
    [13, 3, 6, 7],
    [15,14,12,16]
  ]
  原地旋转输入矩阵，使其变为:
  [
    [15,13, 2, 5],
    [14, 3, 4, 1],
    [12, 6, 8, 9],
    [16, 7,10,11]
  ]
 */
const rotate = function(matrix) {
  const n = matrix.length;
  const half = Math.floor((n + 1) / 2);
  const h = Math.floor(n / 2);
  for (let i = 0; i < half; i++) {
    for (let j = 0; j < h; j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[n - 1 - j][i];
      matrix[n - 1 - j][i] = matrix[n - 1 - i][n - 1 - j];
      matrix[n - 1 - i][n - 1 - j] = matrix[j][n - 1 - i];
      matrix[j][n - 1 - i] = temp;
    }
  }
  return matrix;
};

module.exports = rotate;
