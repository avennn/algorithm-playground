const expect = require('expect.js');
const permuteUnique = require('./index');

describe('全排列2', () => {
  it('输入[1,1,2]输出[[1,1,2],[1,2,1],[2,1,1]]', () => {
    const result = permuteUnique([1, 1, 2]);
    expect(result).to.be.an('array');
    expect(result).to.have.length(3);
  });
});
