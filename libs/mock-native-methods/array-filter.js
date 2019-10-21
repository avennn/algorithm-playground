/**
 * 特点
 * 1. 作用于数组，但不改变原数组
 * 2. 返回新数组
 * 3. 两个参数，第一个参数是回调函数（三个参数：元素的值，元素的索引，被遍历的数组本身），第二个参数作为回调函数的this传入
 * 4. 回调函数调用结果转为boolean类型为true的话，会被添加到新数组
 */
Array.prototype.myFilter = function(callback, ctx) {
  var context = ctx || (typeof window === 'undefined' ? global : window);
  var arr = this;
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (callback.call(context, arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }
  return result;
};
