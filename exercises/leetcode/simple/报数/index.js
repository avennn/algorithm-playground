/**
 * 报数序列是一个整数序列，按照其中的整数的顺序进行报数，得到下一个数。其前五项如下
 * 1.     1
 * 2.     11
 * 3.     21
 * 4.     1211
 * 5.     111221
 * 1被读作"one 1"("一个一"),即11。
 * 11被读作"two 1s"("两个一"),即21。
 * 21被读作"one 2","one 1"("一个二","一个一"),即1211。
 * 给定一个正整数 n（1 ≤ n ≤ 30），输出报数序列的第 n 项。
 * 注意：整数顺序将表示为一个字符串。
 * 示例1
 * 输入: 1
 * 输出: "1"
 * 示例2
 * 输入: 4
 * 输出: "1211"
 */
const countAndSay = function(n) {
  function getNext(pStr) {
    let count = 1;
    let childStr = '';
    for (let i = 1; i < pStr.length; i++) {
      if (pStr[i] === pStr[i - 1]) {
        count++;
      } else {
        childStr += `${count}${pStr[i - 1]}`;
        count = 1;
      }
    }
    childStr += `${count}${pStr[pStr.length - 1]}`;
    return childStr;
  }
  if (n === 1) {
    return '1';
  }
  if (n === 2) {
    return '11';
  }
  let pStr = '11';
  for (let i = 0; i < n - 2; i++) {
    pStr = getNext(pStr);
  }
  return pStr;
};

module.exports = countAndSay;
