const expect = require('expect.js');
const countAndSay = require('./index');

describe('报数', () => {
  it('1报数为1', () => {
    const result = countAndSay(1);
    expect(result).to.be('1');
  });
  it('4报数为1211', () => {
    const result = countAndSay(4);
    expect(result).to.be('1211');
  });
});
