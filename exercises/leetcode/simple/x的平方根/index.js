/**
 * 实现int sqrt(int x)函数。
 * 计算并返回x的平方根，其中x是非负整数。
 * 由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。
 * 示例1:
 * 输入: 4
 * 输出: 2
 * 示例2:
 * 输入: 8
 * 输出: 2
 * 说明: 8 的平方根是 2.82842...,
 * 由于返回类型是整数，小数部分将被舍去。
 */
const mySqrt = function(x) {
  if (x === 0) {
    return 0;
  }
  if (x === 1 || x === 2) {
    return 1;
  }
  let lo = 1;
  let hi = x;
  let mid = Math.floor((lo + hi) / 2);
  while (mid > lo) {
    if (mid * mid > x) {
      hi = mid;
    }
    if (mid * mid < x) {
      lo = mid;
    }
    if (mid * mid === x) {
      return mid;
    }
    mid = Math.floor((lo + hi) / 2);
  }
  return mid;
};

module.exports = mySqrt;
