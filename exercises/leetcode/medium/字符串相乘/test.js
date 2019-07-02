const expect = require('expect.js');
const multiply = require('./index');

describe('字符串相乘', () => {
  it('2乘3返回6', () => {
    const result = multiply('2', '3');
    expect(result).to.be('6');
  });
  it('123乘456返回56088', () => {
    const result = multiply('123', '456');
    expect(result).to.be('56088');
  });
  it('123456789乘987654321返回121932631112635269', () => {
    const result = multiply('123456789', '987654321');
    expect(result).to.be('121932631112635269');
  });
});
