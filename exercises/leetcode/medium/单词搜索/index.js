/**
 * 给定一个二维网格和一个单词，找出该单词是否存在于网格中。
 * 单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。
 * 同一个单元格内的字母不允许被重复使用。
 * 示例：
 * board = [
 *   ['A','B','C','E'],
 *   ['S','F','C','S'],
 *   ['A','D','E','E']
 * ]
 * 给定 word = "ABCCED", 返回 true.
 * 给定 word = "SEE", 返回 true.
 * 给定 word = "ABCB", 返回 false.
 */
var exist = function(board, word) {
  // 参考题解
  let m = board.length;
  if (m === 0) {
    return false;
  }
  let n = board[0].length;
  const marked = [];
  const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  for (let i = 0; i < m; i++) {
    const arr = [];
    for (let j = 0; j < n; j++) {
      arr.push(false);
    }
    marked.push(arr);
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (dfs(i, j, 0)) {
        return true;
      }
    }
  }
  return false;

  function dfs(i, j, start) {
    if (start === word.length - 1) {
      return board[i][j] === word[start];
    }
    if (board[i][j] === word[start]) {
      marked[i][j] = true;
      for (let k = 0; k < 4; k++) {
        let x = i + directions[k][0];
        let y = j + directions[k][1];
        if (inArea(x, y) && !marked[x][y]) {
          if (dfs(x, y, start + 1)) {
            return true;
          }
        }
      }
      marked[i][j] = false;
    }
    return false;
  }
  function inArea(x, y) {
    return x >= 0 && x < m && y >= 0 && y < n;
  }
};

module.exports = exist;
