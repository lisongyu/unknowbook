function Foo() {
  
}
Foo.prototype={}
var a = new Foo();
// console.log(Object.getPrototypeOf(a)===Foo.prototype)
console.log(a.constructor === Foo)
console.log(a.constructor===Object)