function foo() {
  console.log(this.a)
}

function doFoo(fn) {
  fn();
}
var obj = {
  a: 2,
  foo: foo
};
var bar = obj.foo;//函数别名
var a = 'oops,global'
doFoo(obj.foo)