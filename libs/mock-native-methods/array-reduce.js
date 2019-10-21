/**
 * 特点
 * 1. 数组方法
 * 2. 第一个参数为callback函数，第二个参数为initialValue初始值
 * 3. callback函数有4个参数，第一个参数是累加器accumulator，第二个参数是当前值currentValue，第三个参数是当前索引currentIndex，第四个参数是原数组array
 * 4. callback第一次执行时accumulator和currentValue取值情况：提供了initialvalue，accumulator取initialValue，currentValue取array[0]；未提供initialvalue（不传入值，传入undefined也不算），accumulator取array[0]，currentValue取array[1]
 * 5. array和initialValue的情况：array为空，没有提供initialValue，抛出TypeError；array只有一个元素，没有提供initialValue，或者array为空，提供initialValue，返回该唯一值，callback不执行
 */
Array.prototype.myReduce = function(cb, initialValue) {
  var self = this;
  var arr = self.filter(function(item, index) {
    // 过滤掉数组中的empty
    return index in self;
  });
  var len = arr.length;
  var args = Array.prototype.slice.call(arguments);
  if (!len && args.length < 2) {
    throw TypeError('error');
  }
  if (!len && args.length >= 2) {
    return initialValue;
  }
  if (len === 1 && args.length < 2) {
    return arr[0];
  }
  var acc;
  var currentIndex;
  if (args.length < 2) {
    acc = arr[0];
    currentIndex = 1;
  } else {
    acc = initialValue;
    currentIndex = 0;
  }
  for (var i = currentIndex; i < arr.length; i++) {
    acc = cb(acc, arr[i], i, arr);
  }
  return acc;
};
