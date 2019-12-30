function foo() {
  var a = 2;
  function baz() {
    console.log(a)
  }
  // return bar
  bar(baz)
}


function bar(fn) {
  fn()
}

foo()
// var baz = foo();
// baz()


