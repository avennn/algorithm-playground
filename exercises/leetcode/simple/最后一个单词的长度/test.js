const expect = require('expect.js');
const lengthOfLastWord = require('./index');

describe('最后一个单词的长度', () => {
  it('Hello World最后一个单词长度为5', () => {
    const result = lengthOfLastWord('Hello World');
    expect(result).to.be(5);
  });
});
