/**
 * 给定两个整数，被除数 dividend 和除数 divisor。将两数相除，要求不使用乘法、除法和 mod 运算符。
 * 返回被除数 dividend 除以除数 divisor 得到的商。
 * 说明
 * 被除数和除数均为 32 位有符号整数。
 * 除数不为0。
 * 假设我们的环境只能存储 32 位有符号整数，其数值范围是 [−2^31, 2^31 − 1]。
 * 本题中，如果除法结果溢出，则返回 2^31 − 1。
 * 示例1
 * 输入: dividend = 10, divisor = 3
 * 输出: 3
 * 示例2
 * 输入: dividend = 7, divisor = -3
 * 输出: -2
 */
const divide = function(dividend, divisor) {
  let isSameSymbol = true;
  if ((dividend > 0 && divisor < 0) || (dividend < 0 && divisor > 0)) {
    isSameSymbol = false;
  }
  let m = Math.abs(dividend);
  let n = Math.abs(divisor);
  let acc = 0;
  let accStep = n;
  let time = 0;
  let timeStep = 1;
  while (m > acc) {
    acc += accStep;
    time += timeStep;
    if (m < acc) {
      if (m >= acc - n) {
        time--;
        break;
      }
      acc -= accStep;
      time -= timeStep;
      accStep = n;
      timeStep = 1;
    } else if (m > acc) {
      accStep += accStep;
      timeStep += timeStep;
    }
  }
  const res = isSameSymbol ? time : -time;
  if (res < -(2 ** 31) || res > 2 ** 31 - 1) {
    return 2 ** 31 - 1;
  }
  return res;
};

module.exports = divide;
