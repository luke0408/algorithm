const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const segments = [];
for (let i = 1; i <= n; i++) {
  segments.push(input[i].split(' ').map(Number));
}

// Please Write your code here.
const ary = Array(101).fill(0);

const result = () => {
    let tmp = ary;

    for (s of segments) {
        tmp = tmp.map((v,i) => {
            if (s[0] <= i && i <= s[1]) return v + 1;
            else return v;
        })
    }

    return Math.max(...tmp);
}

console.log(result());
