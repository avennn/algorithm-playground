const expect = require('expect.js');
const intervalIntersection = require('./index');

describe('区间列表交集', () => {
  it('输入A = [[0,2],[5,10],[13,23],[24,25]],B = [[1,5],[8,12],[15,24],[25,26]]，输出[[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]', () => {
    const result = intervalIntersection(
      [[0, 2], [5, 10], [13, 23], [24, 25]],
      [[1, 5], [8, 12], [15, 24], [25, 26]]
    );
    expect(result).to.have.length(6);
    expect(result).to.eql([
      [1, 2],
      [5, 5],
      [8, 10],
      [15, 23],
      [24, 24],
      [25, 25]
    ]);
  });
});
