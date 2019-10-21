const expect = require('expect.js');
require('../array-reduce');

describe('数组reduce方法', () => {
  it('reduce: 1+2+3等于6', () => {
    const result = [2, 3].reduce(function(acc, curItem) {
      return acc + curItem;
    }, 1);
    expect(result).to.be(6);
  });
  it('myReduce: 1+2+3等于6', () => {
    const result = [2, 3].myReduce(function(acc, curItem) {
      return acc + curItem;
    }, 1);
    expect(result).to.be(6);
  });
  it('reduce: 数组为空，无初始值', () => {
    function fn() {
      return [].reduce(function(acc, curItem) {
        return acc + curItem;
      });
    }
    expect(fn).to.throwException(function(e) {
      expect(e).to.be.a(TypeError);
    });
  });
  it('myReduce: 数组为空，无初始值', () => {
    function fn() {
      return [].myReduce(function(acc, curItem) {
        return acc + curItem;
      });
    }
    expect(fn).to.throwException(function(e) {
      expect(e).to.be.a(TypeError);
    });
  });
  it('reduce: 数组为空，初始值为undefined', () => {
    const result = [].reduce(function(acc, curItem) {
      return acc + curItem;
    }, undefined);
    expect(result).to.be(undefined);
  });
  it('myReduce: 数组为空，初始值为undefined', () => {
    const result = [].myReduce(function(acc, curItem) {
      return acc + curItem;
    }, undefined);
    expect(result).to.be(undefined);
  });
  it('reduce: 数组为空，初始值为null', () => {
    const result = [].reduce(function(acc, curItem) {
      return acc + curItem;
    }, null);
    expect(result).to.be(null);
  });
  it('myReduce: 数组为空，初始值为null', () => {
    const result = [].myReduce(function(acc, curItem) {
      return acc + curItem;
    }, null);
    expect(result).to.be(null);
  });
  it('reduce: 数组有1个非空元素，无初始值', () => {
    const result = [1].reduce(function(acc, curItem) {
      return acc + curItem;
    });
    expect(result).to.be(1);
  });
  it('reduce: 数组为空，初始值为1', () => {
    const result = [].reduce(function(acc, curItem) {
      return acc + curItem;
    }, 1);
    expect(result).to.be(1);
  });
  it('myReduce: 数组为空，初始值为1', () => {
    const result = [].reduce(function(acc, curItem) {
      return acc + curItem;
    }, 1);
    expect(result).to.be(1);
  });
  it('myReduce: 数组有1个非空元素，无初始值', () => {
    const result = [1].myReduce(function(acc, curItem) {
      return acc + curItem;
    });
    expect(result).to.be(1);
  });
  it('reduce: 数组有2个empty元素，1个非empty元素，无初始值', () => {
    const arr = Array(3);
    arr[2] = 1;
    const result = arr.reduce(function(acc, curItem) {
      return acc + curItem;
    });
    expect(result).to.be(1);
  });
  it('myReduce: 数组有2个empty元素，1个非empty元素，无初始值', () => {
    const arr = Array(3);
    arr[2] = 1;
    const result = arr.myReduce(function(acc, curItem) {
      return acc + curItem;
    });
    expect(result).to.be(1);
  });
  it('reduce: 数组有2个empty元素，2个非empty元素，无初始值', () => {
    const arr = Array(4);
    arr[2] = 1;
    arr[3] = 2;
    const result = arr.reduce(function(acc, curItem) {
      return acc + curItem;
    });
    expect(result).to.be(3);
  });
  it('myReduce: 数组有2个empty元素，2个非empty元素，无初始值', () => {
    const arr = Array(4);
    arr[2] = 1;
    arr[3] = 2;
    const result = arr.myReduce(function(acc, curItem) {
      return acc + curItem;
    });
    expect(result).to.be(3);
  });
});
