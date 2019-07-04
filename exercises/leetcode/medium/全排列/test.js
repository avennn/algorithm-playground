const expect = require('expect.js');
const permute = require('./index');

describe('全排列', () => {
  it('输入[1,2,3]输出[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]', () => {
    const result = permute([1, 2, 3]);
    expect(result).to.be.an('array');
    expect(result).to.have.length(6);
  });
});
