/**
 * 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000
 * 示例1
 * 输入: "babad"
 * 输出: "bab"
 * 注意: "aba" 也是一个有效答案。
 * 示例2
 * 输入: "cbbd"
 * 输出: "bb"
 */
const longestPalindrome = function(s) {
  // 参考题解，中心扩展算法。更优解：Manacher算法？
  if (!s) {
    return '';
  }
  let start = 0;
  let end = 0;
  for (let i = 0; i < s.length; i++) {
    const len1 = expandAroundCenter(s, i, i);
    const len2 = expandAroundCenter(s, i, i + 1);
    const maxLen = Math.max(len1, len2);
    if (maxLen > end - start + 1) {
      start = i - Math.floor((maxLen - 1) / 2);
      end = i + Math.floor(maxLen / 2);
    }
  }
  return s.substring(start, end + 1);

  function expandAroundCenter(s, left, right) {
    let l = left;
    let r = right;
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      l--;
      r++;
    }
    return r - l - 1;
  }
};

module.exports = longestPalindrome;
