/**
 * 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
 * 示例1
 * 输入: "abcabcbb"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 * 示例2
 * 输入: "bbbbb"
 * 输出: 1
 * 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
 * 示例3
 * 输入: "pwwkew"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是"wke"，所以其长度为 3。
 * 请注意，你的答案必须是 子串 的长度，"pwke"是一个子序列，不是子串。
 */
const lengthOfLongestSubstring = function(s) {
  const arr = s.split('');
  let i = 0;
  const list = [];
  let resultList = [];
  while (i < arr.length) {
    const start = arr[i];
    const index = list.indexOf(start);
    list.push(start);
    if (index > -1) {
      list.splice(0, index + 1);
    }
    if (resultList.length < list.length) {
      resultList = [...list];
    }
    i++;
  }
  return resultList.length;
};

module.exports = lengthOfLongestSubstring;
