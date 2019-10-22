/**
 * 特点
 * 1.参数是可迭代对象：Array或者string
 * 2.参数为不可迭代对象，报错
 * 3.参数为空的迭代对象（空数组或空字符串），返回pending状态promise
 * 4.参数数组不包含任何promise，返回异步完成状态promise
 * 5.参数数组有一个先至非promise或promise成功，返回pending状态promise，最后resolve结果
 * 6.参数数组有1个先至promise抛出错误，返回pending状态promise，最后reject错误
 */
module.exports = function promiseRace(arr) {
  function isPromise(item) {
    return (
      (typeof item === 'object' || typeof item === 'function') &&
      typeof item.then === 'function'
    );
  }
  if (!Array.isArray(arr) && typeof arr !== 'string') {
    throw new TypeError();
  }
  // 最重要部分
  return new Promise(function(resolve, reject) {
    for (let i = 0; i < arr.length; i++) {
      let p = arr[i];
      if (!isPromise(p)) {
        resolve(p);
      } else {
        p.then(res => {
          resolve(res);
        }).catch(e => {
          reject(e);
        });
      }
    }
  });
};
