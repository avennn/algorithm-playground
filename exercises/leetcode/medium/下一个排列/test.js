const expect = require('expect.js');
const nextPermutation = require('./index');

describe('下一个排列', () => {
  it('[1,2,3]下一个排列为[1,3,2]', () => {
    const result = nextPermutation([1, 2, 3]);
    expect(result).to.eql([1, 3, 2]);
  });
  it('[1,3,2]下一个排列为[2,1,3]', () => {
    const result = nextPermutation([1, 3, 2]);
    expect(result).to.eql([2, 1, 3]);
  });
  it('[2,1,3]下一个排列为[2,3,1]', () => {
    const result = nextPermutation([2, 1, 3]);
    expect(result).to.eql([2, 3, 1]);
  });
  it('[3,2,1]下一个排列为[1,2,3]', () => {
    const result = nextPermutation([3, 2, 1]);
    expect(result).to.eql([1, 2, 3]);
  });
  it('[5,1,1]下一个排列为[1,1,5]', () => {
    const result = nextPermutation([5, 1, 1]);
    expect(result).to.eql([1, 1, 5]);
  });
});
