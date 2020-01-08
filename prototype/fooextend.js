function Foo(name) {
  this.name = name;
}
Foo.prototype.myName = function () {
  return this.name
}

function Bar(name, label) {
  Foo.call(this, name);
  this.label=label
}
//我们创建了一个新的Bar.prototype对象并关联到Foo.prototype
Bar.prototype = Object.create(Foo.prototype);

Bar.prototype.myLabel = function () {
  return this.label
}
var a = new Bar("a", "obj a");
console.log(a.myName());
console.log(a.myLabel());
console.log(Bar.prototype.constructor===Foo)