const expect = require('expect.js');
const scoreOfParentheses = require('./index');

describe('括号的分数', () => {
  it('输入()输出1', () => {
    const result = scoreOfParentheses('()');
    expect(result).to.be(1);
  });
  it('输入(())输出2', () => {
    const result = scoreOfParentheses('(())');
    expect(result).to.be(2);
  });
  it('输入()()输出2', () => {
    const result = scoreOfParentheses('()()');
    expect(result).to.be(2);
  });
  it('输入(()(()))输出6', () => {
    const result = scoreOfParentheses('(()(()))');
    expect(result).to.be(6);
  });
});
