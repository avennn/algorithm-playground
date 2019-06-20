const expect = require('expect.js');
const threeSumClosest = require('./index');

describe('最接近的三数之和', () => {
  it('nums=[-1，2，1，-4]，target=1，最接近的3数之和为2', () => {
    const result = threeSumClosest([-1, 2, 1, -4], 1);
    expect(result).to.be(2);
  });
});
