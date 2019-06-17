/**
 * 给出 n 代表生成括号的对数，请你写出一个函数，使其能够生成所有可能的并且有效的括号组合。
 * 例如，给出 n = 3，生成结果为：
 * ["((()))","(()())","(())()","()(())","()()()"]
 */

const generateParenthesis = function(n) {
  // 参照题解，回溯法
  function backTrack(s, open, close) {
    if (s.length === n * 2) {
      arr.push(s);
      return;
    }
    if (open < n) {
      backTrack(s + '(', open + 1, close);
    }
    if (close < n && open > close) {
      backTrack(s + ')', open, close + 1);
    }
  }
  const arr = [];
  backTrack('(', 1, 0);
  return arr;
};

module.exports = generateParenthesis;
