/**
 * 给定两个整数，分别表示分数的分子numerator和分母denominator，以字符串形式返回小数。
 * 如果小数部分为循环小数，则将循环的部分括在括号内。
 * 示例1:
 * 输入: numerator = 1, denominator = 2
 * 输出: "0.5"
 * 示例2:
 * 输入: numerator = 2, denominator = 1
 * 输出: "2"
 * 示例3:
 * 输入: numerator = 2, denominator = 3
 * 输出: "0.(6)"
 */
var fractionToDecimal = function(numerator, denominator) {
  if (numerator === 0) {
    return '0';
  }
  let result = '';
  if ((numerator < 0) ^ (denominator < 0)) {
    result = '-';
  }
  let dividend = Math.abs(numerator);
  let divisor = Math.abs(denominator);
  result += Math.floor(dividend / divisor);
  let remainder = dividend % divisor;
  if (remainder === 0) {
    return result;
  }
  result += '.';
  const map = {};
  while (remainder !== 0) {
    if (map[remainder] !== undefined) {
      const len = map[remainder];
      const prev = result.substring(0, len);
      const post = result.substring(len, result.length);
      result = `${prev}(${post})`;
      break;
    }
    map[remainder] = result.length;
    remainder *= 10;
    result += Math.floor(remainder / divisor);
    remainder %= divisor;
  }
  return result;
};

module.exports = fractionToDecimal;
