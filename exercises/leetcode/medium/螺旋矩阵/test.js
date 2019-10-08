const expect = require('expect.js');
const spiralOrder = require('./index');

describe('螺旋矩阵', () => {
  it('[[1,2,3],[4,5,6],[7,8,9]]输出[1,2,3,6,9,8,7,4,5]', () => {
    const result = spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    expect(result).to.have.length(9);
    expect(result[4]).to.be(9);
  });
});
