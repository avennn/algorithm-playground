const expect = require('expect.js');
const promiseAll = require('../promise-all');

describe('Promise.all方法', () => {
  it('Promise.all: 参数不是可迭代对象', async () => {
    try {
      await Promise.all(1);
    } catch (e) {
      expect(e).to.be.an(Error);
    }
  });
  it('Promise.all: 参数空数组，返回已完成状态promise', async () => {
    const p = Promise.all([]);
    expect(p).to.be.a(Promise);
    expect(p).to.eql([]);
    try {
      const result = await p;
      expect(result).to.eql([]);
    } catch (e) {
      console.log(e);
    }
  });
  it('Promise.all: 参数空字符串，返回已完成状态promise', async () => {
    const p = Promise.all('');
    expect(p).to.be.a(Promise);
    expect(p).to.eql([]);
    try {
      const result = await p;
      expect(result).to.eql([]);
    } catch (e) {
      console.log(e);
    }
  });
  it('Promise.all: 参数数组不包含promise，返回异步完成状态promise', async () => {
    const p = Promise.all([1, 2, 3]);
    expect(p).to.be.a(Promise);
    try {
      const result = await p;
      expect(result).to.have.length(3);
      expect(result[0]).to.be(1);
      expect(result[1]).to.be(2);
      expect(result[2]).to.be(3);
    } catch (e) {
      console.log(e);
    }
  });
  it('Promise.all: 正常参数，数组至少包含1个promise，返回pending状态promise', async () => {
    const promise1 = new Promise(resolve => {
      setTimeout(() => {
        resolve(1);
      }, 300);
    });
    const promise2 = new Promise(resolve => {
      setTimeout(() => {
        resolve(2);
      }, 100);
    });
    const promise3 = new Promise(resolve => {
      setTimeout(() => {
        resolve(3);
      }, 400);
    });
    const p = Promise.all([promise1, promise2, promise3, 4, 5]);
    expect(p).to.be.a(Promise);
    try {
      const result = await p;
      expect(result).to.have.length(5);
      expect(result[0]).to.be(1);
      expect(result[1]).to.be(2);
      expect(result[2]).to.be(3);
      expect(result[3]).to.be(4);
      expect(result[4]).to.be(5);
    } catch (e) {
      console.log(e);
    }
  });
  it('Promise.all: 正常参数，数组至少包含1个错误promise，返回pending状态promise', async () => {
    const promise1 = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error('error'));
      }, 200);
    });
    const promise2 = new Promise(resolve => {
      setTimeout(() => {
        resolve(2);
      }, 100);
    });
    const promise3 = new Promise(resolve => {
      setTimeout(() => {
        resolve(3);
      }, 400);
    });
    const p = Promise.all([promise1, promise2, promise3]);
    expect(p).to.be.a(Promise);
    try {
      await p;
    } catch (e) {
      expect(e).to.be.an(Error);
      expect(e.message).to.be('error');
    }
  });

  // ------------------------------
  it('promiseAll: 参数不是可迭代对象', async () => {
    try {
      await promiseAll(1);
    } catch (e) {
      expect(e).to.be.an(Error);
    }
  });
  it('promiseAll: 参数空数组，返回已完成状态promise', async () => {
    const p = promiseAll([]);
    expect(p).to.be.a(Promise);
    expect(p).to.eql([]);
    try {
      const result = await p;
      expect(result).to.eql([]);
    } catch (e) {
      console.log(e);
    }
  });
  it('promiseAll: 参数空字符串，返回已完成状态promise', async () => {
    const p = promiseAll('');
    expect(p).to.be.a(Promise);
    expect(p).to.eql([]);
    try {
      const result = await p;
      expect(result).to.eql([]);
    } catch (e) {
      console.log(e);
    }
  });
  it('promiseAll: 参数数组不包含promise，返回异步完成状态promise', async () => {
    const p = promiseAll([1, 2, 3]);
    expect(p).to.be.a(Promise);
    try {
      const result = await p;
      expect(result).to.have.length(3);
      expect(result[0]).to.be(1);
      expect(result[1]).to.be(2);
      expect(result[2]).to.be(3);
    } catch (e) {
      console.log(e);
    }
  });
  it('promiseAll: 正常参数，数组至少包含1个promise，返回pending状态promise', async () => {
    const promise1 = new Promise(resolve => {
      setTimeout(() => {
        resolve(1);
      }, 300);
    });
    const promise2 = new Promise(resolve => {
      setTimeout(() => {
        resolve(2);
      }, 100);
    });
    const promise3 = new Promise(resolve => {
      setTimeout(() => {
        resolve(3);
      }, 400);
    });
    const p = promiseAll([promise1, promise2, promise3, 4, 5]);
    expect(p).to.be.a(Promise);
    try {
      const result = await p;
      expect(result).to.have.length(5);
      expect(result[0]).to.be(1);
      expect(result[1]).to.be(2);
      expect(result[2]).to.be(3);
      expect(result[3]).to.be(4);
      expect(result[4]).to.be(5);
    } catch (e) {
      console.log(e);
    }
  });
  it('promiseAll: 正常参数，数组至少包含1个错误promise，返回pending状态promise', async () => {
    const promise1 = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error('error'));
      }, 200);
    });
    const promise2 = new Promise(resolve => {
      setTimeout(() => {
        resolve(2);
      }, 100);
    });
    const promise3 = new Promise(resolve => {
      setTimeout(() => {
        resolve(3);
      }, 400);
    });
    const p = promiseAll([promise1, promise2, promise3]);
    expect(p).to.be.a(Promise);
    try {
      await p;
    } catch (e) {
      expect(e).to.be.an(Error);
      expect(e.message).to.be('error');
    }
  });
});
