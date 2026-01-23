const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const rectangles = [];
for (let i = 1; i <= n; i++) {
    const [x1, y1, x2, y2] = input[i].split(' ').map(Number);
    rectangles.push([x1, y1, x2, y2]);
}
// Please Write your code here.
const OFFSET = 100;
const MAX_R = 200;
const tiles = Array.from({ length: MAX_R + 1 }, () => Array(MAX_R + 1).fill(0));

// 0, 1, 2
rectangles.forEach((r, i) => {
    let [x1, y1, x2, y2] = r;
    x1 += OFFSET; y1 += OFFSET;
    x2 += OFFSET; y2 += OFFSET;

    for (x = x1; x < x2; x++) {
        for (y = y1; y < y2; y++) {
            tiles[x][y] = (i % 2 === 0)? 1 : 2;
        }
    }
})


// 결과
const result = tiles.flat().filter(v => v === 2).length;
console.log(result);