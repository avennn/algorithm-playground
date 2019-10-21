const expect = require('expect.js');
require('../array-filter');

describe('数组filter方法', () => {
  it('返回数组', () => {
    const result = [1, 2].myFilter(function(item) {
      return item > 1;
    });
    expect(result).to.be.an('array');
    expect(result).to.have.length(1);
    expect(result[0]).to.be(2);
  });
  it('不传this', () => {
    let g;
    const result = [0, 1].myFilter(function(item) {
      g = this;
      return item;
    });
    expect(g).to.be(global);
    expect(result).to.be.an('array');
    expect(result).to.have.length(1);
  });
  it('传this', () => {
    let a = { name: 'javen' };
    let name;
    const result = [1, 2].myFilter(function(item) {
      name = this.name;
      return item;
    }, a);
    expect(name).to.be('javen');
    expect(result).to.be.an('array');
  });
});
