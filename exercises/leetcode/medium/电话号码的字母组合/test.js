const expect = require('expect.js');
const letterCombinations = require('./index');

describe('电话号码的字母组合', () => {
  it('"23"输出["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]', () => {
    const result = letterCombinations('23');
    expect(result).to.have.length(9);
    expect(result).to.contain('ad');
  });
});
