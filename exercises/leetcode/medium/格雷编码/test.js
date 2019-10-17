const expect = require('expect.js');
const grayCode = require('./index');

describe('格雷编码', () => {
  it('输入2返回[0,1,3,2]', () => {
    const result = grayCode(2);
    expect(result).to.have.length(4);
    expect(result[0]).to.be(0);
    expect(result[1]).to.be(1);
    expect(result[2]).to.be(3);
  });
});
