const expect = require('expect.js');
const isMatch = require('./index');

describe('正则表达式匹配', () => {
  it('s为aa，p为a，输出false', () => {
    const result = isMatch('aa', 'a');
    expect(result).to.be(false);
  });
  it('s为aa，p为a*，输出true', () => {
    const result = isMatch('aa', 'a*');
    expect(result).to.be(true);
  });
  it('s为ab，p为.*，输出true', () => {
    const result = isMatch('ab', '.*');
    expect(result).to.be(true);
  });
  it('s为aab，p为c*a*b，输出true', () => {
    const result = isMatch('aab', 'c*a*b');
    expect(result).to.be(true);
  });
  it('s为mississippi，p为is*is*p*.，输出false', () => {
    const result = isMatch('mississippi', 'is*is*p*.');
    expect(result).to.be(false);
  });
});
