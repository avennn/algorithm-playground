const expect = require('expect.js');
const uniquePaths = require('./index');

describe('不同路径', () => {
  it('输入: m = 3, n = 2得到3', () => {
    const result = uniquePaths(3, 2);
    expect(result).to.be(3);
  });
  it('输入: m = 7, n = 3得到28', () => {
    const result = uniquePaths(7, 3);
    expect(result).to.be(28);
  });
});
