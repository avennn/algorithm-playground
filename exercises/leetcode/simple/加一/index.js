/**
 * 给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。
 * 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
 * 你可以假设除了整数 0 之外，这个整数不会以零开头。
 * 示例1：
 * 输入: [1,2,3]
 * 输出: [1,2,4]
 * 解释: 输入数组表示数字 123。
 * 示例2：
 * 输入: [4,3,2,1]
 * 输出: [4,3,2,2]
 * 解释: 输入数组表示数字 4321
 */
const plusOne = function(digits) {
  function step(i) {
    if (i < 0) {
      digits.unshift(1);
      return;
    }
    const item = digits[i];
    if (item === 9) {
      digits[i] = 0;
      step(i - 1);
    } else {
      digits[i]++;
    }
  }
  step(digits.length - 1);
  return digits;
};

module.exports = plusOne;
