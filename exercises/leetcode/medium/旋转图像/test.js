const expect = require('expect.js');
const rotate = require('./index');

describe('旋转图像', () => {
  it('旋转[[1,2,3],[4,5,6],[7,8,9]]', () => {
    const result = rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    expect(result).to.be.an('array');
    expect(result[0]).to.eql([7, 4, 1]);
    expect(result[1]).to.eql([8, 5, 2]);
    expect(result[2]).to.eql([9, 6, 3]);
  });
  it('旋转[[ 5, 1, 9,11],[ 2, 4, 8,10],[13, 3, 6, 7],[15,14,12,16]]', () => {
    const result = rotate([
      [5, 1, 9, 11],
      [2, 4, 8, 10],
      [13, 3, 6, 7],
      [15, 14, 12, 16]
    ]);
    expect(result).to.be.an('array');
    expect(result[0]).to.eql([15, 13, 2, 5]);
    expect(result[1]).to.eql([14, 3, 4, 1]);
    expect(result[2]).to.eql([12, 6, 8, 9]);
    expect(result[3]).to.eql([16, 7, 10, 11]);
  });
});
