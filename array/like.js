function foo() {
  var arr = Array.prototype.slice.call(arguments);
  arr.push('bam');
  console.log(arr)
}
console.log(foo('bar','baz'))