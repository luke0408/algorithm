const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const rectA = input[0].split(' ').map(Number);
const rectB = input[1].split(' ').map(Number);
const rectM = input[2].split(' ').map(Number);

const OFFSET = 1000;
const MAX_R = 2000;
const rect = [rectA, rectB];

// Please Write your code here.
const tiles = Array.from({ length: MAX_R + 1 }, () => Array(MAX_R + 1).fill(0));

// 공간 채우기
rect.forEach(r => {
    let [x1, y1, x2, y2] = r;
    x1 += OFFSET; y1 += OFFSET;
    x2 += OFFSET; y2 += OFFSET;

    for (x = x1; x < x2; x++) {
        for (y = y1; y < y2; y++) {
            tiles[x][y] = 1;
        }
    }
})

// M 공간 지우기
let [x1, y1, x2, y2] = rectM;
x1 += OFFSET; y1 += OFFSET;
x2 += OFFSET; y2 += OFFSET;

for (x = x1; x < x2; x++) {
    for (y = y1; y < y2; y++) {
        tiles[x][y] = 0;
    }
}

// 결과 도출
const result = tiles.flat().filter(v => v === 1).length;
console.log(result);