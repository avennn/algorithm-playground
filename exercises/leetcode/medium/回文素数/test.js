const expect = require('expect.js');
const primePalindrome = require('./index');

describe('回文素数', () => {
  it('输入6输出7', () => {
    const result = primePalindrome(6);
    expect(result).to.be(7);
  });
  it('输入8输出11', () => {
    const result = primePalindrome(8);
    expect(result).to.be(11);
  });
  it('输入13输出101', () => {
    const result = primePalindrome(13);
    expect(result).to.be(101);
  });
});
