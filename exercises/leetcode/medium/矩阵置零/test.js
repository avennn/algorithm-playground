const expect = require('expect.js');
const setZeroes = require('./index');

describe('矩阵置零', () => {
  it('输入[[1,1,1],[1,0,1],[1,1,1]]输出[[1,0,1],[0,0,0],[1,0,1]]', () => {
    const result = setZeroes([[1, 1, 1], [1, 0, 1], [1, 1, 1]]);
    expect(result[0][0]).to.be(1);
    expect(result[0][1]).to.be(0);
    expect(result[1][0]).to.be(0);
    expect(result[1][1]).to.be(0);
    expect(result[1][2]).to.be(0);
  });
  it('输入[[0,1,2,0],[3,4,5,2],[1,3,1,5]]输出[[0,0,0,0],[0,4,5,0],[0,3,1,0]]', () => {
    const result = setZeroes([[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]]);
    expect(result[0][0]).to.be(0);
    expect(result[0][1]).to.be(0);
    expect(result[0][2]).to.be(0);
    expect(result[0][3]).to.be(0);
    expect(result[1][0]).to.be(0);
    expect(result[1][1]).to.be(4);
    expect(result[1][2]).to.be(5);
    expect(result[1][3]).to.be(0);
  });
});
