const expect = require('expect.js');
const threeSum = require('./index');

describe('三数之和', () => {
  it('[-1, 0, 1, 2, -1, -4]三数和为0返回[[-1, 0, 1],[-1, -1, 2]]', () => {
    const arr = threeSum([-1, 0, 1, 2, -1, -4]);
    expect(arr).to.have.length(2);
    expect(arr[0]).to.eql([-1, -1, 2]);
    expect(arr[1]).to.eql([-1, 0, 1]);
  });
  it('[0,0,0,0]三数和为0返回[[0,0,0]]', () => {
    const arr = threeSum([0, 0, 0, 0]);
    expect(arr).to.have.length(1);
    expect(arr[0]).to.eql([0, 0, 0]);
  });
});
