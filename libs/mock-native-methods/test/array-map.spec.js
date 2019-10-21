const expect = require('expect.js');
require('../array-map');

describe('数组map方法', () => {
  it('返回数组', () => {
    const result = [1, 2].myMap(function(item) {
      return item * 2;
    });
    expect(result).to.be.an('array');
    expect(result).to.have.length(2);
    expect(result[0]).to.be(2);
    expect(result[1]).to.be(4);
  });
  it('不传this', () => {
    let g;
    const result = [1, 2].myMap(function(item) {
      g = this;
      return item * 2;
    });
    expect(g).to.be(global);
    expect(result).to.be.an('array');
  });
  it('传this', () => {
    let a = { name: 'javen' };
    let name;
    const result = [1, 2].myMap(function(item) {
      name = this.name;
      return item * 2;
    }, a);
    expect(name).to.be('javen');
    expect(result).to.be.an('array');
  });
});
