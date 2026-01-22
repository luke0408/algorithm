const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, k] = input[0].split(' ').map(Number);
const segments = input.slice(1, k + 1).map(line => line.split(' ').map(Number));

// Please write your code here.
const blocks = Array(n).fill(0);
const result = () => {
    let temp = blocks;

    for (s of segments) {
        temp = temp.map((c, i) => {
            if(s[0] <= i && i <= s[1]) return c + 1;
            else return c;
        })
    }
    
    return temp.reduce((accumulator, currentValue) => {
        return Math.max(accumulator, currentValue);
    }, -Infinity);
}

console.log(result());