const expect = require('expect.js');
const minPathSum = require('./index');

describe('最小路径和', () => {
  it('输入:[[1,3,1],[1,5,1],[4,2,1]]得到7', () => {
    const result = minPathSum([[1, 3, 1], [1, 5, 1], [4, 2, 1]]);
    expect(result).to.be(7);
  });
});
