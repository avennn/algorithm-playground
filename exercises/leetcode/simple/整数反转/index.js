/**
 * 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
 * 示例1
 * 输入: 123
 * 输出: 321
 * 示例2
 * 输入: -123
 * 输出: -321
 * 示例3
 * 输入: 120
 * 输出: 21
 * 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−2^31,  2^31 − 1]。
 * 请根据这个假设，如果反转后整数溢出那么就返回 0。
 */
const reverseNum = function(x) {
  if (!x) {
    return x;
  }
  let result = 0;
  let remain = x;
  let suffix = 0;
  while (!(remain / 10)) {
    remain = remain / 10;
  }
  while (remain) {
    suffix = remain % 10;
    remain = Math.trunc(remain / 10);
    let isOverflow = false;
    if (x < 0) {
      // js：Number.MAX_SAFE_INTEGER?
      isOverflow = result < (-(2 ** 31) - suffix) / 10;
    } else {
      isOverflow = result > (2 ** 31 - 1 - suffix) / 10;
    }
    if (isOverflow) {
      return 0;
    }
    result = result * 10 + suffix;
  }
  return result;
};

module.exports = reverseNum;
