/**
 * 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
 * 示例1
 * 输入: 121
 * 输出: true
 * 示例2
 * 输入: -121
 * 输出: false
 * 解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
 * 示例3
 * 输入: 10
 * 输出: false
 * 解释: 从右向左读, 为 01 。因此它不是一个回文数。
 * 进阶
 * 你能不将整数转为字符串来解决这个问题吗？
 */
const isPalindrome = function(x) {
  if (x < 0 || (!(x % 10) && x)) {
    return false;
  }
  // 将x转成字符串
  // const str = x.toString();
  // for (let i = 0, j = str.length - 1; i <= j; i++, j--) {
  //   if (str[i] !== str[j]) {
  //     return false;
  //   }
  // }
  // return true;
  let a = 0;
  let remain = x;
  while (remain) {
    a = a * 10 + (remain % 10);
    remain = Math.floor(remain / 10);
  }
  return x === a;
};

module.exports = isPalindrome;
