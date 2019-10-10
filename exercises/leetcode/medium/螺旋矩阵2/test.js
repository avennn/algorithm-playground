const expect = require('expect.js');
const generateMatrix = require('./index');

describe('螺旋矩阵2', () => {
  it('输入3输出[[ 1, 2, 3 ],[ 8, 9, 4 ],[ 7, 6, 5 ]]', () => {
    const result = generateMatrix(3);
    expect(result).to.have.length(3);
    expect(result[0]).to.have.length(3);
    expect(result[1][0]).to.be(8);
  });
});
