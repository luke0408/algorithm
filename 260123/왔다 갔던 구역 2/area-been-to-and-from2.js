const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1, n + 1);

// Please Write your code here.
const ary = Array(2001).fill(0);
let x = 1001

const moving = (ary, cnt, move) => {
    let tmp = ary;

    const getRange = () => {
        let t = [0, 0]
        if (move == 'R') {
            t = [x, x + cnt];
            x = x + cnt;
        } else {
            t = [x - cnt, x];
            x = x - cnt;
        }
        return t;
    };

    const range = getRange()

    return tmp.map((v, i) => {
        if (range[0] <= i && i <= range[1] - 1) return v + 1;
        else return v;
    })
}

const result = () => {
    let tmp = ary;
    for (c of commands) { 
        tmp = moving(tmp, Number(c[0]), c[2]); 
    }
    return tmp.filter((v) => v >= 2).length;
}

console.log(result());
