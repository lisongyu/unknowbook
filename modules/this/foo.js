count = 0;
function foo(num) {
  console.log("foo: " + num);
  //记录foo被调用的次数
  this.count++;
}

foo.count = 0;
var i;
for (i = 0; i < 10; i++){
  if (i > 5) {
    foo(i)
  }
}

//foo 被调用了多少次
console.log(foo.count)
console.log(count);