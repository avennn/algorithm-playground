/**
 * 给定一个平衡括号字符串S，按下述规则计算该字符串的分数：
 * () 得 1 分。
 * AB得A + B分，其中 A 和 B 是平衡括号字符串。
 * (A)得2 * A分，其中 A 是平衡括号字符串
 * 示例1:
 * 输入： "()"
 * 输出： 1
 * 示例2：
 * 输入： "(())"
 * 输出： 2
 * 示例3:
 * 输入： "()()"
 * 输出： 2
 * 示例4:
 * 输入： "(()(()))"
 * 输出： 6
 * 提示：
 * S 是平衡括号字符串，且只含有 ( 和 ) 。
 * 2 <= S.length <= 50
 */
var scoreOfParentheses = function(S) {
  // 参考题解
  let ans = 0;
  let depth = 0;
  for (let i = 0; i < S.length; i++) {
    if (S[i] === '(') {
      depth++;
    } else {
      depth--;
      if (S[i - 1] === '(') {
        ans += 1 << depth;
      }
    }
  }
  return ans;
};

module.exports = scoreOfParentheses;
