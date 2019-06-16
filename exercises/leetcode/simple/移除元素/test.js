const expect = require('expect.js');
const removeElement = require('./index');

describe('移除元素', () => {
  it('[3,2,2,3]移除元素3后返回长度2', () => {
    const result = removeElement([3, 2, 2, 3], 3);
    expect(result).to.be(2);
  });
  it('[0,1,2,2,3,0,4,2]移除元素2后返回长度5', () => {
    const result = removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2);
    expect(result).to.be(5);
  });
  it('[3,3]移除元素3后返回长度0', () => {
    const result = removeElement([3, 3], 3);
    expect(result).to.be(0);
  });
});
