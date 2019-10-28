/**
 * 已有方法rand7可生成1到7范围内的均匀随机整数，
 * 试写一个方法rand10生成1到10范围内的均匀随机整数。
 * 不要使用系统的Math.random()方法。
 * 示例1:
 * 输入: 1
 * 输出: [7]
 * 示例2:
 * 输入: 2
 * 输出: [8,4]
 * 示例3:
 * 输入: 3
 * 输出: [8,1,10]
 * 提示：
 * rand7 已定义。
 * 传入参数: n 表示 rand10 的调用次数。
 * 进阶：
 * rand7()调用次数的 期望值 是多少 ?
 * 你能否尽量少调用 rand7() ?
 */
/**
 * The rand7() API is already defined for you.
 * var rand7 = function() {}
 * @return {number} a random integer in the range 1 to 7
 */

function rand7() {
  return Math.floor(Math.random() * 7) + 1;
}
exports.rand7 = rand7;

/* eslint-disable */
var rand10 = function() {
  // 1
  while (true) {
    let rand = (rand7() - 1) * 7 + rand7();
    if (rand <= 40) {
      return (rand % 10) + 1;
    }
  }
  return 0;
  // 2
  // let mark = 0;
  // let temp = 0;
  // while (true) {
  //   temp = rand7();
  //   if (temp < 4) {
  //     mark = 0;
  //     break;
  //   } else if (temp > 4) {
  //     mark = 1;
  //     break;
  //   }
  // }
  // while (true) {
  //   temp = rand7();
  //   if (temp <= 5) {
  //     break;
  //   }
  // }
  // if (mark === 0) {
  //   return temp;
  // }
  // return temp + 5;
};

module.exports = rand10;
