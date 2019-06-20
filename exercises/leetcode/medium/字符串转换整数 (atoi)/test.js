const expect = require('expect.js');
const myAtoi = require('./index');

describe('字符串转换整数 (atoi)', () => {
  it('输入字符串"42"输出数字42', () => {
    const result = myAtoi('42');
    expect(result).to.be.a('number');
    expect(result).to.be(42);
  });
  it('输入字符串"   -42"输出数字-42', () => {
    const result = myAtoi('   -42');
    expect(result).to.be.a('number');
    expect(result).to.be(-42);
  });
  it('输入字符串"4193 with words"输出数字4193', () => {
    const result = myAtoi('4193 with words');
    expect(result).to.be.a('number');
    expect(result).to.be(4193);
  });
  it('输入字符串"words and 987"输出数字0', () => {
    const result = myAtoi('words and 987');
    expect(result).to.be.a('number');
    expect(result).to.be(0);
  });
  it('输入字符串"-91283472332"输出数字-2147483648', () => {
    const result = myAtoi('-91283472332');
    expect(result).to.be.a('number');
    expect(result).to.be(-2147483648);
  });
  it('输入字符串"+-2"输出数字0', () => {
    const result = myAtoi('+-2');
    expect(result).to.be.a('number');
    expect(result).to.be(0);
  });
});
