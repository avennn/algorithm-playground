/**
 * 特点
 * 1. 作用于函数上
 * 2. 返回新函数（绑定函数）
 * 3 . 绑定函数的参数与原函数一样
 * 4. 第一个参数作为上下文this
 * 5. 其他参数为作为绑定函数的参数传入（优先使用）
 * 6. new运算符实例化绑定函数时，绑定函数传入的this无效
 * 7. 绑定函数能继承原函数原型链上的属性
 */
Function.prototype.myBind = function(ctx) {
  var self = this;
  var args = Array.prototype.slice.call(arguments, 1);
  var fnNil = function() {}; // 空方法防止修改fnBound.prototype时也修改了this.prototype
  var fnBound = function() {
    var bindArgs = Array.prototype.slice.call(arguments);
    return self.apply(
      this instanceof fnBound ? this : ctx,
      args.concat(bindArgs)
    );
  };
  fnNil.prototype = this.prototype;
  fnBound.prototype = new fnNil();
  return fnBound;
};
