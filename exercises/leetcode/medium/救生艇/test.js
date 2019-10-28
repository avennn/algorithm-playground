const expect = require('expect.js');
const numRescueBoats = require('./index');

describe('救生艇', () => {
  it('输入people = [1,2], limit = 3，输出1', () => {
    const result = numRescueBoats([1, 2], 3);
    expect(result).to.be(1);
  });
  it('输入people = [3,2,2,1], limit = 3，输出3', () => {
    const result = numRescueBoats([3, 2, 2, 1], 3);
    expect(result).to.be(3);
  });
  it('输入people = [3,5,3,4], limit = 5，输出4', () => {
    const result = numRescueBoats([3, 5, 3, 4], 5);
    expect(result).to.be(4);
  });
});
