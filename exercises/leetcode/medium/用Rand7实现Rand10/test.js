const expect = require('expect.js');
const rand10 = require('./index');

describe('用Rand7实现Rand10', () => {
  it('输入()输出1', () => {
    const result = rand10();
    expect(result).to.be.below(11);
    expect(result).to.be.above(0);
  });
});
