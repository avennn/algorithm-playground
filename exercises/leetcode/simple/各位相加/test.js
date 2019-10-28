const expect = require('expect.js');
const addDigits = require('./index');

describe('各位相加', () => {
  it('输入38输出2', () => {
    const result = addDigits(38);
    expect(result).to.be(2);
  });
});
