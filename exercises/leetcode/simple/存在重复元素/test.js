const expect = require('expect.js');
const containsDuplicate = require('./index');

describe('存在重复元素', () => {
  it('输入[1,2,3,1]输出true', () => {
    const result = containsDuplicate([1, 2, 3, 1]);
    expect(result).to.be(true);
  });
  it('输入[1,2,3,4]输出false', () => {
    const result = containsDuplicate([1, 2, 3, 4]);
    expect(result).to.be(false);
  });
  it('输入[1,1,1,3,3,4,3,2,4,2]输出true', () => {
    const result = containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]);
    expect(result).to.be(true);
  });
});
