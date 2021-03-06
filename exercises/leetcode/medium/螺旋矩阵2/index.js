/**
 * 给定一个正整数n，生成一个包含1到n^2所有元素，且元素按顺时针顺序螺旋排列的正方形矩阵。
 * 示例：
 * 输入: 3
 * 输出:
 * [
 *   [ 1, 2, 3 ],
 *   [ 8, 9, 4 ],
 *   [ 7, 6, 5 ]
 * ]
 */
const generateMatrix = function(n) {
  const matrix = [];
  for (let i = 0; i < n; i++) {
    const arr = [];
    for (let j = 0; j < n; j++) {
      arr.push(j);
    }
    matrix.push(arr);
  }
  let num = 1;
  let tar = n * n;
  let t = 0;
  let l = 0;
  let r = n - 1;
  let b = n - 1;
  while (num <= tar) {
    for (let i = l; i <= r; i++) {
      matrix[t][i] = num++;
    }
    t++;
    for (let i = t; i <= b; i++) {
      matrix[i][r] = num++;
    }
    r--;
    for (let i = r; i >= l; i--) {
      matrix[b][i] = num++;
    }
    b--;
    for (let i = b; i >= t; i--) {
      matrix[i][l] = num++;
    }
    l++;
  }
  return matrix;
};

module.exports = generateMatrix;
