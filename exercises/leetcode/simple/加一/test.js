const expect = require('expect.js');
const plusOne = require('./index');

describe('加一', () => {
  it('输入[1,2,3]结果为[1,2,4]', () => {
    const result = plusOne([1, 2, 3]);
    expect(result[2]).to.be(4);
  });
  it('输入[9]结果为[1,0]', () => {
    const result = plusOne([9]);
    expect(result[0]).to.be(1);
    expect(result[1]).to.be(0);
  });
});
