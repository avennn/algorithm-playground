const expect = require('expect.js');
const zConvert = require('./index');

describe('Z字形变换', () => {
  it('AB，row为1，变换成AB', () => {
    expect(zConvert('AB', 1)).to.be('AB');
  });
  it('LEETCODEISHIRING，row为3，变换成LCIRETOESIIGEDHN', () => {
    expect(zConvert('LEETCODEISHIRING', 3)).to.be('LCIRETOESIIGEDHN');
  });
  it('LEETCODEISHIRING，row为4，变换成LDREOEIIECIHNTSG', () => {
    expect(zConvert('LEETCODEISHIRING', 4)).to.be('LDREOEIIECIHNTSG');
  });
});
