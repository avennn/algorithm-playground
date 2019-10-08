const expect = require('expect.js');
const addBinary = require('./index');

describe('二进制求和', () => {
  it('输入a="11", b="1"结果为"100"', () => {
    const result = addBinary('11', '1');
    expect(result).to.be('100');
  });
  it('输入a="1010", b="1011"结果为"10101"', () => {
    const result = addBinary('1010', '1011');
    expect(result).to.be('10101');
  });
});
