/**
 * 给定一个包含 m x n 个元素的矩阵（m 行, n 列）
 * 请按照顺时针螺旋顺序，返回矩阵中的所有元素。
 * 示例1:
 * 输入:
 * [
 *   [ 1, 2, 3 ],
 *   [ 4, 5, 6 ],
 *   [ 7, 8, 9 ]
 * ]
 * 输出: [1,2,3,6,9,8,7,4,5]
 * 输入:
 * [
 *   [1, 2, 3, 4],
 *   [5, 6, 7, 8],
 *   [9, 10, 11, 12]
 * ]
 * 输出: [1,2,3,4,8,12,11,10,9,5,6,7]
 */
const spiralOrder = function(matrix) {
  const arr = [];
  if (!matrix.length) {
    return arr;
  }
  let r1 = 0;
  let r2 = matrix.length - 1;
  let c1 = 0;
  let c2 = matrix[0].length - 1;
  while (r1 <= r2 && c1 <= c2) {
    for (let c = c1; c <= c2; c++) {
      arr.push(matrix[r1][c]);
    }
    for (let r = r1 + 1; r <= r2; r++) {
      arr.push(matrix[r][c2]);
    }
    if (r1 < r2 && c1 < c2) {
      for (let c = c2 - 1; c > c1; c--) {
        arr.push(matrix[r2][c]);
      }
      for (let r = r2; r > r1; r--) {
        arr.push(matrix[r][c1]);
      }
    }
    r1++;
    r2--;
    c1++;
    c2--;
  }
  return arr;
};

module.exports = spiralOrder;
