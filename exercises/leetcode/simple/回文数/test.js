const expect = require('expect.js');
const isPalindrome = require('./index');

describe('回文数', () => {
  it('121是回文数', () => {
    expect(isPalindrome(121)).to.be(true);
  });
  it('-121不是是回文数', () => {
    expect(isPalindrome(-121)).to.be(false);
  });
  it('10不是回文数', () => {
    expect(isPalindrome(10)).to.be(false);
  });
});
