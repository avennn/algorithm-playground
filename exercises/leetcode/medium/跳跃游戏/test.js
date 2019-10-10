const expect = require('expect.js');
const canJump = require('./index');

describe('跳跃游戏', () => {
  it('[2,3,1,1,4]能跳到终点', () => {
    const result = canJump([2, 3, 1, 1, 4]);
    expect(result).to.be(true);
  });
  it('[3,2,1,0,4]不能跳到终点', () => {
    const result = canJump([3, 2, 1, 0, 4]);
    expect(result).to.be(false);
  });
});
