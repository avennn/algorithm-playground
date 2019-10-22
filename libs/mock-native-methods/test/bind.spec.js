const expect = require('expect.js');
require('../bind');

describe('bind方法', () => {
  it('bind: 返回函数', () => {
    function add(x, y) {
      return x + y;
    }
    const result = add.bind();
    expect(result).to.be.a('function');
  });
  it('myBind: 返回函数', () => {
    function add(x, y) {
      return x + y;
    }
    const result = add.myBind();
    expect(result).to.be.a('function');
  });
  it('bind: 传入预先参数', () => {
    function add(x, y) {
      return x + y;
    }
    const myAdd = add.bind(null, 1);
    const result = myAdd(2, 3);
    expect(result).to.be(3);
  });
  it('myBind: 传入预先参数', () => {
    function add(x, y) {
      return x + y;
    }
    const myAdd = add.myBind(null, 1);
    const result = myAdd(2, 3);
    expect(result).to.be(3);
  });
  it('bind: 不传入预先参数', () => {
    function add(x, y) {
      return x + y;
    }
    const myAdd = add.myBind(null);
    const result = myAdd(2, 3);
    expect(result).to.be(5);
  });
  it('myBind: 不传入预先参数', () => {
    function add(x, y) {
      return x + y;
    }
    const myAdd = add.myBind(null);
    const result = myAdd(2, 3);
    expect(result).to.be(5);
  });

  it('bind: 传入this', () => {
    let name;
    function add(x, y) {
      name = this.name;
      return x + y;
    }
    const myAdd = add.bind({ name: 'javen' });
    const result = myAdd(2, 3);
    expect(name).to.be('javen');
    expect(result).to.be(5);
  });
  it('myBind: 传入this', () => {
    let name;
    function add(x, y) {
      name = this.name;
      return x + y;
    }
    const myAdd = add.myBind({ name: 'javen' });
    const result = myAdd(2, 3);
    expect(name).to.be('javen');
    expect(result).to.be(5);
  });
  it('bind: new实例化this失效', () => {
    let name;
    function add(x, y) {
      name = this.name;
      return x + y;
    }
    const myAdd = add.bind({ name: 'javen' });
    new myAdd(2, 3);
    expect(name).to.be(undefined);
  });
  it('myBind: new实例化this失效', () => {
    let name;
    function add(x, y) {
      name = this.name;
      return x + y;
    }
    const myAdd = add.myBind({ name: 'javen' });
    new myAdd(2, 3);
    expect(name).to.be(undefined);
  });
});
