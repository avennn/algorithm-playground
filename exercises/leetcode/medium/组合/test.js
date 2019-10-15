const expect = require('expect.js');
const combine = require('./index');

describe('组合', () => {
  it('输入n = 4, k = 2，输出[[2,4],[3,4],[2,3],[1,2],[1,3],[1,4]]', () => {
    const result = combine(4, 2);
    expect(result).to.have.length(6);
  });
});
