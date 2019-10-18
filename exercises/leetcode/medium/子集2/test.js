const expect = require('expect.js');
const subsetsWithDup = require('./index');

describe('子集2', () => {
  it('输入[1,2,2]返回[[2],[1],[1,2,2],[2,2],[1,2],[]]', () => {
    const result = subsetsWithDup([1, 2, 2]);
    expect(result).to.have.length(6);
  });
});
