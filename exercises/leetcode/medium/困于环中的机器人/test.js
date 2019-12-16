const expect = require('expect.js');
const isRobotBounded = require('./index');

describe('困于环中的机器人', () => {
  it('输入GGLLGG输出true', () => {
    const result = isRobotBounded('GGLLGG');
    expect(result).to.be(true);
  });
  it('输入GG输出false', () => {
    const result = isRobotBounded('GG');
    expect(result).to.be(false);
  });
  it('输入GL输出true', () => {
    const result = isRobotBounded('GL');
    expect(result).to.be(true);
  });
});
