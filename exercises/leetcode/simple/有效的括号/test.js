const expect = require('expect.js');
const isValidBacket = require('./index');

describe('有效的括号', () => {
  it('()为true', () => {
    expect(isValidBacket('()')).to.be(true);
  });
  it('()[]{}为true', () => {
    expect(isValidBacket('()[]{}')).to.be(true);
  });
  it('(]为false', () => {
    expect(isValidBacket('(]')).to.be(false);
  });
  it('([)]为false', () => {
    expect(isValidBacket('([)]')).to.be(false);
  });
  it('{[]}为true', () => {
    expect(isValidBacket('{[]}')).to.be(true);
  });
  it('空字符串为true', () => {
    expect(isValidBacket('')).to.be(true);
  });
});
