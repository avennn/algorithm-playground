/**
 * 实现pow(x, n)，即计算x的n次幂函数。
 * 示例1
 * 输入: 2.00000, 10
 * 输出: 1024.00000
 * 示例2
 * 输入: 2.10000, 3
 * 输出: 9.26100
 * 示例3
 * 输入: 2.00000, -2
 * 输出: 0.25000
 * 解释: 2-2 = 1/22 = 1/4 = 0.25
 * 说明：
 * -100.0 < x < 100.0
 * n是32位有符号整数，其数值范围是[−231, 231 − 1]。
 */
const myPow = function(x, n) {
  if (n === 0) {
    return 1;
  }
  let y = x;
  let m = n;
  if (m < 0) {
    y = 1 / y;
    m = -m;
  }
  let cur = y;
  let ans = 1;
  for (let i = m; i; i = Math.floor(i / 2)) {
    if (i % 2 === 1) {
      ans = ans * cur;
    }
    cur = cur * cur;
  }
  return ans;
};

module.exports = myPow;
