const expect = require('expect.js');
const uniquePathsWithObstacles = require('./index');

describe('不同路径2', () => {
  it('输入: [[0,0,0],[0,1,0],[0,0,0]]得到2', () => {
    const result = uniquePathsWithObstacles([[0, 0, 0], [0, 1, 0], [0, 0, 0]]);
    expect(result).to.be(2);
  });
  it('输入: [[1, 0]]得到0', () => {
    const result = uniquePathsWithObstacles([[1, 0]]);
    expect(result).to.be(0);
  });
});
