/**
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 * 有效字符串需满足：
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 * 注意空字符串可被认为是有效字符串。
 * 示例1
 * 输入: "()"
 * 输出: true
 * 示例2
 * 输入: "()[]{}"
 * 输出: true
 * 示例3
 * 输入: "(]"
 * 输出: false
 * 示例4
 * 输入: "([)]"
 * 输出: false
 * 示例5
 * 输入: "{[]}"
 * 输出: true
 */
const isValidBacket = function(s) {
  const m = {
    '(': 1,
    '{': 2,
    '[': 3,
    ')': -1,
    '}': -2,
    ']': -3
  };
  if (!s.length) {
    return true;
  }
  if (s.length === 1 || m[s[0]] < 0) {
    return false;
  }
  const arr = [];
  for (let i = 0; i < s.length; i++) {
    const val = m[s[i]];
    if (val < 0) {
      if (!arr.length) {
        return false;
      }
      const p = arr.pop();
      if (p + val !== 0) {
        return false;
      }
    } else {
      arr.push(val);
    }
  }
  return !arr.length;
};

module.exports = isValidBacket;
