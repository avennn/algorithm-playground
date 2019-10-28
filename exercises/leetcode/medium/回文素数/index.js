/**
 * 求出大于或等于N的最小回文素数。
 * 回顾一下，如果一个数大于 1，且其因数只有 1 和它自身，那么这个数是素数。
 * 例如，2，3，5，7，11以及13 是素数。
 * 回顾一下，如果一个数从左往右读与从右往左读是一样的，那么这个数是回文数。
 * 例如，12321 是回文数。
 * 示例1:
 * 输入：6
 * 输出：7
 * 示例2:
 * 输入：8
 * 输出：11
 * 示例3:
 * 输入：13
 * 输出：101
 * 提示：
 * 1 <= N <= 10^8
 * 答案肯定存在，且小于 2 * 10^8
 */
var primePalindrome = function(N) {
  function reverse(n) {
    let ans = 0;
    while (n > 0) {
      ans = 10 * ans + (n % 10);
      n = Math.floor(n / 10);
    }
    return ans;
  }
  function isPrime(m) {
    if (m < 2) {
      return false;
    }
    let R = Math.floor(Math.sqrt(m));
    for (let d = 2; d <= R; d++) {
      if (m % d === 0) {
        return false;
      }
    }
    return true;
  }
  // eslint-disable-next-line
  while (true) {
    if (reverse(N) === N && isPrime(N)) {
      return N;
    }
    N++;
    if (N > 10000000 && N < 100000000) {
      N = 100000000;
    }
  }
};

module.exports = primePalindrome;
