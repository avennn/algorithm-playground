/**
 * 给你一个字符串s和一个字符规律p，请你来实现一个支持'.'和'*'的正则表达式匹配。
 * '.' 匹配任意单个字符
 * '*' 匹配零个或多个前面的那一个元素
 * 说明：
 * s 可能为空，且只包含从 a-z 的小写字母。
 * p 可能为空，且只包含从 a-z 的小写字母，以及字符 . 和 *。
 * 示例1
 * 输入:
 * s = "aa"
 * p = "a"
 * 输出: false
 * 解释: "a" 无法匹配 "aa" 整个字符串。
 * 示例2
 * 输入:
 * s = "aa"
 * p = "a*"
 * 输出: true
 * 解释:因为'*'代表可以匹配零个或多个前面的那一个元素, 在这里前面的元素就是'a'。因此，字符串 "aa"可被视为 'a' 重复了一次。
 * 示例3
 * 输入:
 * s = "ab"
 * p = ".*"
 * 输出: true
 * 解释: ".*" 表示可匹配零个或多个（'*'）任意字符（'.'）。
 * 示例4
 * 输入:
 * s = "aab"
 * p = "c*a*b"
 * 输出:true
 * 解释:因为 '*' 表示零个或多个，这里 'c' 为 0 个, 'a' 被重复一次。因此可以匹配字符串 "aab"。
 * 示例5
 * 输入:
 * s = "mississippi"
 * p = "mis*is*p*."
 * 输出: false
 */
const isMatch = function(s, p) {
  // 参考官方题解
  if (!p) {
    return !s;
  }
  const firstMatch = s && (s[0] === p[0] || p[0] === '.');
  if (p.length >= 2 && p[1] === '*') {
    return (
      (firstMatch && isMatch(s.substring(1), p)) || isMatch(s, p.substring(2))
    );
  } else {
    return firstMatch && isMatch(s.substring(1), p.substring(1));
  }
};

module.exports = isMatch;
