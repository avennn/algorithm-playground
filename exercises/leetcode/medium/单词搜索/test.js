const expect = require('expect.js');
const exist = require('./index');

describe('单词搜索', () => {
  it("输入:[['A','B','C','E'],['S','F','C','S'],['A','D','E','E']]和'ABCCED'，输出:true", () => {
    const result = exist(
      [['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']],
      'ABCCED'
    );
    expect(result).to.be(true);
  });
  it("输入:[['A','B','C','E'],['S','F','C','S'],['A','D','E','E']]和'SEE'，输出:true", () => {
    const result = exist(
      [['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']],
      'SEE'
    );
    expect(result).to.be(true);
  });
  it("输入:[['A','B','C','E'],['S','F','C','S'],['A','D','E','E']]和'ABCB'，输出:false", () => {
    const result = exist(
      [['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']],
      'ABCB'
    );
    expect(result).to.be(false);
  });
});
