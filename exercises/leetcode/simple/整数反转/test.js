const expect = require('expect.js');
const reverseNum = require('./index');

describe('整数反转', () => {
  it('123反转成321', () => {
    expect(reverseNum(123)).to.be(321);
  });
  it('-123反转成-321', () => {
    expect(reverseNum(-123)).to.be(-321);
  });
  it('120反转成21', () => {
    expect(reverseNum(120)).to.be(21);
  });
  it('2^31反转成0', () => {
    expect(reverseNum(2 ** 31)).to.be(0);
  });
  it('-2^31 - 1反转成0', () => {
    expect(reverseNum(-(2 ** 31) - 1)).to.be(0);
  });
});
