/**
 * 特点
 * 1.对数组使用，加工数组对每一个元素并返回一个新数组
 * 2.两个参数，第一个参数是函数（三个参数：currentValue当前元素，index当前元素的索引号，array数组本身），第二个参数是this的指向，即函数参数的上下文。
 */
Array.prototype.myMap = function(cb, ctx) {
  const context = ctx || (typeof window === 'undefined' ? global : window);
  const arr = this;
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const item = cb.call(context, arr[i], i, arr);
    result.push(item);
  }
  return result;
};
