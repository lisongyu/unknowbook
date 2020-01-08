// function foo() {
//   console.log(this.a);
// }
// var obj = {
//   a:2
// }
// var bar = function () {
//   foo.call(obj);
// }
// bar()
// setTimeout(bar, 100)
// bar.call();

function foo(something) {
  console.log(this.a, something)
  return this.a + something
}

//简单的辅助绑定函数
function bind(fn, obj) {
  return function () {
    return fn.apply(obj, arguments)
  }
}

var obj = {
  a: 2
}
var bar = bind(foo, obj)
var b = bar(3);
console.log(b)