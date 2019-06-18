const expect = require('expect.js');
const searchInsert = require('./index');

describe('搜索插入位置', () => {
  it('[1,3,5,6]搜索插入5返回2', () => {
    const result = searchInsert([1, 3, 5, 6], 5);
    expect(result).to.be(2);
  });
  it('[1,3,5,6]搜索插入2返回1', () => {
    const result = searchInsert([1, 3, 5, 6], 2);
    expect(result).to.be(1);
  });
  it('[1,3,5,6]搜索插入7返回4', () => {
    const result = searchInsert([1, 3, 5, 6], 7);
    expect(result).to.be(4);
  });
  it('[1,3,5,6]搜索插入0返回0', () => {
    const result = searchInsert([1, 3, 5, 6], 0);
    expect(result).to.be(0);
  });
});
