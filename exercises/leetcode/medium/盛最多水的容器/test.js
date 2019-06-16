const expect = require('expect.js');
const maxArea = require('./index');

describe('盛最多水的容器', () => {
  it('输入[1,8,6,2,5,4,8,3,7]，输出49', () => {
    const area = maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
    expect(area).to.be(49);
  });
});
