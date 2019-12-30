var fn;
function foo() {
  var a = 2;
  function baz() {
    console.log(a);
  }
  fn = baz; //将baz分配给全局变量
}

function bar() {
  fn()
}
foo();
bar();//2

