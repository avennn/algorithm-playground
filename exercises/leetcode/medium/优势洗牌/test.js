const expect = require('expect.js');
const advantageCount = require('./index');

describe('优势洗牌', () => {
  it('输入A = [2,7,11,15], B = [1,10,4,11]输出[2,11,7,15]', () => {
    const result = advantageCount([2, 7, 11, 15], [1, 10, 4, 11]);
    expect(result).to.eql([2, 11, 7, 15]);
  });
  it('输入A = [12,24,8,32], B = [13,25,32,11]输出[24,32,8,12]', () => {
    const result = advantageCount([12, 24, 8, 32], [13, 25, 32, 11]);
    expect(result).to.eql([24, 32, 8, 12]);
  });
  it('输入A = [9,1,2,4,5], B = [6,2,9,1,4]输出[9,4,1,2,5]', () => {
    const result = advantageCount([9, 1, 2, 4, 5], [6, 2, 9, 1, 4]);
    expect(result).to.eql([9, 4, 1, 2, 5]);
  });
});
