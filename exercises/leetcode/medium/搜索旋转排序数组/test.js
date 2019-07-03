const expect = require('expect.js');
const search = require('./index');

describe('搜索旋转排序数组', () => {
  it('nums = [4,5,6,7,0,1,2], target = 0输出4', () => {
    const result = search([4, 5, 6, 7, 0, 1, 2], 0);
    expect(result).to.be(4);
  });
  it('nums = [4,5,6,7,0,1,2], target = 3输出-1', () => {
    const result = search([4, 5, 6, 7, 0, 1, 2], 3);
    expect(result).to.be(-1);
  });
});
