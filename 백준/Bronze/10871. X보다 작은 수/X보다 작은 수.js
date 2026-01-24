var fs = require('fs'); 
var input = fs.readFileSync('/dev/stdin').toString().split('\n');
var num = input[1].split(' ').map(Number);
var result = num.filter(n => n < Number(input[0].split(' ')[1])).join(' ');
console.log(result);