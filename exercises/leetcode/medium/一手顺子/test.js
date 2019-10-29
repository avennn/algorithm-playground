const expect = require('expect.js');
const isNStraightHand = require('./index');

describe('一手顺子', () => {
  it('输入hand = [1,2,3,6,2,3,4,7,8], W = 3输出true', () => {
    const result = isNStraightHand([1, 2, 3, 6, 2, 3, 4, 7, 8], 3);
    expect(result).to.eql(true);
  });
});
