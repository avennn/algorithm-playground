const expect = require('expect.js');
const groupAnagrams = require('./index');

describe('字母异位词分组', () => {
  it('["eat", "tea", "tan", "ate", "nat", "bat"]输出[["ate","eat","tea"],["nat","tan"],["bat"]]', () => {
    const result = groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']);
    expect(result).to.be.an('array');
    expect(result).to.have.length(3);
  });
});
