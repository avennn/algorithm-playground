const expect = require('expect.js');
const numDecodings = require('./index');

describe('解码方法', () => {
  it('输入12输出2', () => {
    const result = numDecodings('12');
    expect(result).to.be(2);
  });
  it('输入226输出2', () => {
    const result = numDecodings('226');
    expect(result).to.be(3);
  });
});
