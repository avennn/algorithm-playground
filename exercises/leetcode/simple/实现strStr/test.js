const expect = require('expect.js');
const strStr = require('./index');

describe('实现strStr', () => {
  it('haystack = "", needle = "l"输出-1', () => {
    const result = strStr('', 'll');
    expect(result).to.be(-1);
  });
  it('haystack = "l", needle = ""输出0', () => {
    const result = strStr('l', '');
    expect(result).to.be(0);
  });
  it('haystack = "hello", needle = "ll"输出2', () => {
    const result = strStr('hello', 'll');
    expect(result).to.be(2);
  });
  it('haystack = "aaaaa", needle = "bba"输出-1', () => {
    const result = strStr('aaaaa', 'bba');
    expect(result).to.be(-1);
  });
});
