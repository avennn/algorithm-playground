const expect = require('expect.js');
const merge = require('./index');

describe('合并区间', () => {
  it('[[1,3],[2,6],[8,10],[15,18]]合并成[[1,6],[8,10],[15,18]]', () => {
    const result = merge([[1, 3], [2, 6], [8, 10], [15, 18]]);
    expect(result[0][0]).to.be(1);
    expect(result[0][1]).to.be(6);
  });
  it('[[1,4],[4,5]]合并成[1,5]', () => {
    const result = merge([[1, 4], [4, 5]]);
    expect(result[0][0]).to.be(1);
    expect(result[0][1]).to.be(5);
  });
});
