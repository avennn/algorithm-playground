const expect = require('expect.js');
const promiseRace = require('../promise-race');

describe('Promise.race方法', () => {
  it('Promise.race: 参数不是可迭代对象', async () => {
    try {
      await Promise.race(1);
    } catch (e) {
      expect(e).to.be.an(Error);
    }
  });
  it('Promise.race: 参数空数组，返回pending状态promise', async () => {
    const p = Promise.race([]);
    expect(p).to.be.a(Promise);
  });
  it('Promise.race: 参数空字符串，返回pending状态promise', async () => {
    const p = Promise.race('');
    expect(p).to.be.a(Promise);
  });
  it('Promise.race: 参数数组不包含promise，返回异步完成状态promise', async () => {
    const p = Promise.race([1, 2, 3]);
    expect(p).to.be.a(Promise);
    try {
      const result = await p;
      expect(result).to.be(1);
    } catch (e) {
      console.log(e);
    }
  });
  it('Promise.race: 正常参数，数组至少包含1个promise，返回pending状态promise', async () => {
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
    const p = Promise.race([promise1, promise2, promise3]);
    expect(p).to.be.a(Promise);
    try {
      const result = await p;
      expect(result).to.be(2);
    } catch (e) {
      console.log(e);
    }
  });
  it('Promise.race: 正常参数，数组至少包含1个错误promise，返回pending状态promise', async () => {
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
    const p = Promise.race([promise1, promise2, promise3]);
    expect(p).to.be.a(Promise);
    try {
      const result = await p;
      expect(result).to.be(2);
    } catch (e) {
      console.log(e);
    }
  });

  // ------------------------------
  it('promiseRace: 参数不是可迭代对象', async () => {
    try {
      await promiseRace(1);
    } catch (e) {
      expect(e).to.be.an(Error);
    }
  });
  it('promiseRace: 参数空数组，返回pending状态promise', async () => {
    const p = promiseRace([]);
    expect(p).to.be.a(Promise);
  });
  it('promiseRace: 参数空字符串，返回pending状态promise', async () => {
    const p = promiseRace('');
    expect(p).to.be.a(Promise);
  });
  it('promiseRace: 参数数组不包含promise，返回异步完成状态promise', async () => {
    const p = promiseRace([1, 2, 3]);
    expect(p).to.be.a(Promise);
    try {
      const result = await p;
      expect(result).to.be(1);
    } catch (e) {
      console.log(e);
    }
  });
  it('promiseRace: 正常参数，数组至少包含1个promise，返回pending状态promise', async () => {
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
    const p = promiseRace([promise1, promise2, promise3]);
    expect(p).to.be.a(Promise);
    try {
      const result = await p;
      expect(result).to.be(2);
    } catch (e) {
      console.log(e);
    }
  });
  it('promiseRace: 正常参数，数组至少包含1个错误promise，返回pending状态promise', async () => {
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
    const p = promiseRace([promise1, promise2, promise3]);
    expect(p).to.be.a(Promise);
    try {
      const result = await p;
      expect(result).to.be(2);
    } catch (e) {
      console.log(e);
    }
  });
});
