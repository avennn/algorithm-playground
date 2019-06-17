const expect = require('expect.js');
const longestCommonPrefix = require('./index');

describe('最长公共前缀', () => {
  it('["flower","flow","flight"]最长公共前缀fl', () => {
    const prefix = longestCommonPrefix(['flower', 'flow', 'flight']);
    expect(prefix).to.be('fl');
  });
  it('["dog","racecar","car"]最长公共前缀“”', () => {
    const prefix = longestCommonPrefix(['dog', 'racecar', 'car']);
    expect(prefix).to.be('');
  });
});
