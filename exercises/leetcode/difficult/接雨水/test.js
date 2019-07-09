const expect = require('expect.js');
const trap = require('./index');

describe('接雨水', () => {
  it('输入[0,1,0,2,1,0,1,3,2,1,2,1]输出6', () => {
    const result = trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);
    expect(result).to.be(6);
  });
});
