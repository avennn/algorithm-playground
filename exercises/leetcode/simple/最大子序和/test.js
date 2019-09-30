const expect = require('expect.js');
const maxSubArray = require('./index');

describe('最大子序和', () => {
  it('输入[-2,1,-3,4,-1,2,1,-5,4]结果为6', () => {
    const result = maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
    expect(result).to.be(6);
  });
});
