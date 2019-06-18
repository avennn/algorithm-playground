/**
 * 实现strStr()函数。
 * 给定一个haystack字符串和一个needle字符串，在haystack字符串中找出needle字符串出现的第一个位置 (从0开始)。如果不存在，则返回-1。
 * 当needle是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。
 * 对于本题而言，当needle是空字符串时我们应当返回0 。这与C语言的strstr()以及Java的indexOf()定义相符。
 * 示例1
 * 输入: haystack = "hello", needle = "ll"
 * 输出: 2
 * 示例2
 * 输入: haystack = "aaaaa", needle = "bba"
 * 输出: -1
 */
const strStr = function(haystack, needle) {
  // 指针回溯法
  // const hLen = haystack.length;
  // const nLen = needle.length;
  // if (!nLen) {
  //   return 0;
  // }
  // if (!hLen) {
  //   return -1;
  // }
  // let i = 0;
  // let j = 0;
  // while (i < hLen && j < nLen) {
  //   if (haystack[i] === needle[j]) {
  //     i++;
  //     j++;
  //   } else {
  //     i = i - j + 1;
  //     j = 0;
  //   }
  // }
  // return j === nLen ? i - j : -1;

  // kmp算法
  function getNext(pStr) {
    const next = [];
    next[0] = -1;
    let j = 0;
    let k = -1;
    while (j < pStr.length - 1) {
      if (k === -1 || pStr[j] === pStr[k]) {
        next[++j] = ++k;
      } else {
        k = next[k];
      }
    }
    return next;
  }
  const next = getNext(needle);
  let i = 0;
  let j = 0;
  while (i < haystack.length && j < needle.length) {
    if (j === -1 || haystack[i] === needle[j]) {
      i++;
      j++;
    } else {
      j = next[j];
    }
  }
  return j === needle.length ? i - j : -1;
};

module.exports = strStr;
