var str = '/customer/10/test';
var regexp = new RegExp('^/customer/\\d+/');
var test = regexp.test(str);
console.log(test);

var r1 = "\\d+";
console.log(str.match(r1));

let r = /(\w+\.)+\w+/g;
console.log("site.com my.site.com".match(r));
