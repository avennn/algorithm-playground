/**
 * 给定两个二进制字符串，返回他们的和（用二进制表示）。
 * 输入为非空字符串且只包含数字 1 和 0。
 * 示例1:
 * 输入: a = "11", b = "1"
 * 输出: "100"
 * 示例2:
 * 输入: a = "1010", b = "1011"
 * 输出: "10101"
 */
const addBinary = function(a, b) {
  const aLen = a.length;
  const bLen = b.length;
  const len = Math.max(aLen, bLen);
  if (bLen < len) {
    b = '0'.repeat(len - bLen) + b;
  }
  if (aLen < len) {
    a = '0'.repeat(len - aLen) + a;
  }
  const arr = Array.of(len).fill(0);
  function step(i, c) {
    if (i < 0) {
      if (c === '1') {
        arr.unshift(c);
      }
      return;
    }
    const aItem = a[i] || '0';
    const bItem = b[i] || '0';
    if (aItem === bItem && aItem === '0') {
      arr[i] = c;
      step(i - 1, '0');
    } else if (aItem === bItem && aItem === '1') {
      arr[i] = c;
      step(i - 1, '1');
    } else if (c === '1') {
      arr[i] = '0';
      step(i - 1, '1');
    } else {
      arr[i] = '1';
      step(i - 1, '0');
    }
  }
  step(len - 1, '0');
  return arr.join('');
};

module.exports = addBinary;
