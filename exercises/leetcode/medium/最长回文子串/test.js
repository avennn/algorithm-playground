const expect = require('expect.js');
const longestPalindrome = require('./index');

describe('最长回文子串', () => {
  it('babad的最长回文子串为bab', () => {
    expect(longestPalindrome('babad')).to.be('bab');
  });
  it('cbbd的最长回文子串为bb', () => {
    expect(longestPalindrome('cbbd')).to.be('bb');
  });
});
