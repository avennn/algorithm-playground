/**
 * 给定两个以字符串形式表示的非负整数num1和num2，返回num1和num2的乘积，它们的乘积也表示为字符串形式。
 * 示例
 * 输入: num1 = "2", num2 = "3"
 * 输出: "6"
 * 示例
 * 输入: num1 = "123", num2 = "456"
 * 输出: "56088"
 * 说明
 * num1和num2的长度小于110。
 * num1和num2只包含数字0-9。
 * num1和num2均不以零开头，除非是数字0本身。
 * 不能使用任何标准库的大数类型（比如 BigInteger）或直接将输入转换为整数来处理。
 */
const multiply = function(num1, num2) {
  if (num1 === '0' || num2 === '0') {
    return '0';
  }
};

module.exports = multiply;
