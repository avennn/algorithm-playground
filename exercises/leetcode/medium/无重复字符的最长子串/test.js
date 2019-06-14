const expect = require('expect.js');
const lengthOfLongestSubstring = require('./index');

describe('无重复字符的最长子串', () => {
  it('abcabcbb最长子串abc，长度3', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).to.be(3);
  });
  it('bbbbb最长子串b，长度1', () => {
    expect(lengthOfLongestSubstring('bbbbb')).to.be(1);
  });
  it('pwwkew最长子串wke，长度3', () => {
    expect(lengthOfLongestSubstring('pwwkew')).to.be(3);
  });
  it('tmmzuxt最长子串mzuxt，长度5', () => {
    expect(lengthOfLongestSubstring('tmmzuxt')).to.be(5);
  });
});
