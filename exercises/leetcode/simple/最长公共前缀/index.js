/**
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 如果不存在公共前缀，返回空字符串 ""。
 * 示例1
 * 输入: ["flower","flow","flight"]
 * 输出: "fl"
 * 示例2
 * 输入: ["dog","racecar","car"]
 * 输出: ""
 * 解释: 输入不存在公共前缀。
 */
const longestCommonPrefix = function(strs) {
  function twoLongestPrefix(str1, str2) {
    const minLen = Math.min(str1.length, str2.length);
    let s = '';
    for (let i = 0; i < minLen; i++) {
      if (str1[i] === str2[i]) {
        s += str1[i];
      } else {
        break;
      }
    }
    return s;
  }
  if (!Array.isArray(strs) || !strs.length) {
    return '';
  }
  let prefix = strs[0];
  for (let j = 1; j < strs.length; j++) {
    prefix = twoLongestPrefix(prefix, strs[j]);
    if (!prefix) {
      return '';
    }
  }
  return prefix;
};

module.exports = longestCommonPrefix;
