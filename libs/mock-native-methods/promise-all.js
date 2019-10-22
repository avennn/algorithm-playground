/**
 * 特点
 * 1.参数是可迭代对象：Array或者string
 * 2.参数为不可迭代对象，报错
 * 3.参数为空的迭代对象（空数组或空字符串），返回已完成状态promise
 * 4.参数数组不包含任何promise，返回异步完成状态promise
 * 5.参数数组至少包含1个promise，promise都不抛出错误，返回pending状态promise，最后resolve结果
 * 6.参数数组至少有1个promise抛出错误，返回pending状态promise，最后reject错误
 */
module.exports = function promiseAll(arr) {
  function isPromise(item) {
    return (
      (typeof item === 'object' || typeof item === 'function') &&
      typeof item.then === 'function'
    );
  }
  if (!Array.isArray(arr) && typeof arr !== 'string') {
    throw new TypeError();
  }
  if (!arr.length) {
    return Promise.resolve([]);
  }
  const hasPromiseItem = !!arr.filter(function(item) {
    return isPromise(item);
  }).length;
  if (!hasPromiseItem) {
    return Promise.resolve(arr);
  }

  // 最重要部分
  const len = arr.length;
  const result = Array(len).fill(undefined);
  let marked = 0;
  return new Promise(function(resolve, reject) {
    for (let i = 0; i < len; i++) {
      let p = arr[i];
      if (!isPromise(p)) {
        result[i] = p;
        marked++;
        if (marked === len) {
          resolve(result);
        }
      } else {
        p.then(res => {
          result[i] = res;
          marked++;
          if (marked === len) {
            resolve(result);
          }
        }).catch(e => {
          reject(e);
        });
      }
    }
  });
};
