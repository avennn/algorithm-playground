const expect = require('expect.js');
const generateParenthesis = require('./index');

describe('括号生成', () => {
  it('输入3，生成括号结果为["((()))","(()())","(())()","()(())","()()()"]', () => {
    const arr = generateParenthesis(3);
    expect(arr).to.have.length(5);
    expect(arr).to.contain('((()))');
    expect(arr).to.contain('(()())');
    expect(arr).to.contain('(())()');
    expect(arr).to.contain('()(())');
    expect(arr).to.contain('()()()');
  });
});
