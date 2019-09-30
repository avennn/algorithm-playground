/**
 * 给定一个仅包含大小写字母和空格 ' ' 的字符串，返回其最后一个单词的长度。
 * 如果不存在最后一个单词，请返回 0 。
 * 说明：一个单词是指由字母组成，但不包含任何空格的字符串。
 * 示例：
 * 输入: "Hello World"
 * 输出: 5
 */
const lengthOfLastWord = function(s) {
  let end = s.length - 1;
  let start = end;
  if (end === -1) {
    return '';
  }
  while (end > -1 && s[end] === ' ') {
    end--;
    start--;
  }
  while (start > -1 && s[start] !== ' ') {
    start--;
  }
  return end - start;
};

module.exports = lengthOfLastWord;
