const expect = require('expect.js');
const getPermutation = require('./index');

describe('第k个排列', () => {
  it('输入: n = 3, k = 3得到213', () => {
    const result = getPermutation(3, 3);
    expect(result).to.be('213');
  });
  it('输入: n = 4, k = 9得到2314', () => {
    const result = getPermutation(4, 9);
    expect(result).to.be('2314');
  });
});
