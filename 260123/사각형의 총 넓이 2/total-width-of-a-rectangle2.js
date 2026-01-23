const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const rects = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

// Please Write your code here.
const offset = 100;
const blacks = Array(201).fill().map(() => Array(201).fill(0));
let x1 = 0, y1 = 0, x2 = 0, y2 = 0;

for (let i = 0; i < n; i++) {
    x1 = offset + rects[i][0];
    y1 = offset + rects[i][1];
    x2 = offset + rects[i][2];
    y2 = offset + rects[i][3];

    for (let x = 0; x < blacks.length; x++) {
        for (let y = 0; y < blacks.length; y++) {
            if ((x1 <= x && x < x2) && (y1 <= y && y < y2)) {
                blacks[x][y] = 1;
            };
        }
    }
}

const result = blacks.flat()
    .filter((v) => v === 1)
    .length;

console.log(result);