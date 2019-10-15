const expect = require('expect.js');
const sortColors = require('./index');

describe('颜色分类', () => {
  it('输入[2,0,2,1,1,0]，输出[0,0,1,1,2,2]', () => {
    const result = sortColors([2, 0, 2, 1, 1, 0]);
    expect(result[0]).to.be(0);
    expect(result[1]).to.be(0);
    expect(result[2]).to.be(1);
    expect(result[3]).to.be(1);
    expect(result[4]).to.be(2);
    expect(result[5]).to.be(2);
  });
});
