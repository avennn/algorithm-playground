const expect = require('expect.js');
const maximalSquare = require('./index');

describe('最大正方形', () => {
  it('输入[[1,0,1,0,0],[1,0,1,1,1],[1,1,1,1,1],[1,0,0,1,0]]输出4', () => {
    const result = maximalSquare([
      [1, 0, 1, 0, 0],
      [1, 0, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 0, 0, 1, 0]
    ]);
    expect(result).to.be(4);
  });
});
