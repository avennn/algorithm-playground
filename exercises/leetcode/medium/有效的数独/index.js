/**
 * 判断一个9x9的数独是否有效。只需要根据以下规则，验证已经填入的数字是否有效即可。
 * 1.数字 1-9 在每一行只能出现一次。
 * 2.数字 1-9 在每一列只能出现一次。
 * 3.数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。
 * 说明：
 * 一个有效的数独（部分已被填充）不一定是可解的。
 * 只需要根据以上规则，验证已经填入的数字是否有效即可。
 * 给定数独序列只包含数字1-9和字符'.'。
 * 给定数独永远是9x9形式的。
 */
const isValidSudoku = function(board) {
  const rowMap = Array(9);
  const colMap = Array(9);
  const boxMap = Array(9);
  for (let m = 0; m < board.length; m++) {
    rowMap[m] = {};
    colMap[m] = {};
    boxMap[m] = {};
  }
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
      const val = board[i][j];
      if (val !== '.') {
        rowMap[i][val] = (rowMap[i][val] || 0) + 1;
        colMap[j][val] = (colMap[j][val] || 0) + 1;
        boxMap[boxIndex][val] = (boxMap[boxIndex][val] || 0) + 1;
      }
      if (
        rowMap[i][val] > 1 ||
        colMap[j][val] > 1 ||
        boxMap[boxIndex][val] > 1
      ) {
        return false;
      }
    }
  }
  return true;
};

module.exports = isValidSudoku;
