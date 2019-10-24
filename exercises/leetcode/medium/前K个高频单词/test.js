const expect = require('expect.js');
const topKFrequent = require('./index');

describe('前K个高频单词', () => {
  it('输入["i", "love", "leetcode", "i", "love", "coding"], k = 2输出["i", "love"]', () => {
    const result = topKFrequent(
      ['i', 'love', 'leetcode', 'i', 'love', 'coding'],
      2
    );
    expect(result).to.have.length(2);
    expect(result[0]).to.be('i');
    expect(result[1]).to.be('love');
  });
});
