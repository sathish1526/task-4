var a=[5,2,4,6,8];
var b=[1,4,15,13,12];
var c=a.concat(b);
c.sort(function (a,b){return a-b;});
let len=a.length;
let result=(c[len-1]+c[len])/2;
console.log(result);