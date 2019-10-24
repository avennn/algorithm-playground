const expect = require('expect.js');
const minStickers = require('./index');

describe('贴纸拼词', () => {
  it('输入["with", "example", "science"]和"thehat"输出3', () => {
    const result = minStickers(['with', 'example', 'science'], 'thehat');
    expect(result).to.be(3);
  });
  it('输入["notice", "possible"]和"thehat"输出3', () => {
    const result = minStickers(['notice', 'possible'], 'basicbasic');
    expect(result).to.be(-1);
  });
});
