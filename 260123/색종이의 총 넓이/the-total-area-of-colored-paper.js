const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const rects = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

// Please Write your code here.
const OFFSET = 100;
const MAX_R = 200;
const tiles = Array.from({ length: MAX_R + 1 }, () => Array(MAX_R + 1).fill(0));

// 좌측하단 이니까 x + 8, y + 8
rects.forEach(r => {
    let [x1, y1] = r;
    x1 += OFFSET; y1 += OFFSET;
    let x2 = x1 + 8; let y2 = y1 + 8;

    for (let x = x1; x < x2; x++) {
        for (let y = y1; y < y2; y++) {
            tiles[x][y] = 1;
        }
    }
})

// 결론
const result = tiles.flat().filter(v => v === 1).length;
console.log(result);