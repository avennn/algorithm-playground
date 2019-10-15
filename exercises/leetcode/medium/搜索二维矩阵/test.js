const expect = require('expect.js');
const searchMatrix = require('./index');

describe('搜索二维矩阵', () => {
  it('输入matrix=[[1,   3,  5,  7],[10, 11, 16, 20],[23, 30, 34, 50]]，target=3，输出true', () => {
    const result = searchMatrix(
      [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 50]],
      3
    );
    expect(result).to.be(true);
  });
  it('输入matrix=[[1,   3,  5,  7],[10, 11, 16, 20],[23, 30, 34, 50]]，target=13，输出false', () => {
    const result = searchMatrix(
      [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 50]],
      13
    );
    expect(result).to.be(false);
  });
});
