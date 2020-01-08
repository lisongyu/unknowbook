function foo(x) {
  x = x + 1
  console.log(x)
}
var a = 2;
var b = new Number(a);
foo(b)
console.log(b)

let c = Array.apply(null, { length: 3 })
console.log(c)