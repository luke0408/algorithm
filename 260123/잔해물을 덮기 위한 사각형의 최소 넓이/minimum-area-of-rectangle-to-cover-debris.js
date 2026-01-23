const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const rect1 = input[0].split(' ').map(Number);
const rect2 = input[1].split(' ').map(Number);

// Please Write your code here.
// 덮이지 않은 잔해의 최소, 최대 x와 y 구하기
const OFFSET = 1000;
const MAX_R = 2000;
const blocks = Array.from({ length: MAX_R + 1 }, () => Array(MAX_R + 1).fill(0));

// 1. 직사각형 그리기
let [x1, y1, x2, y2] = rect1;
x1 += OFFSET; y1 += OFFSET;
x2 += OFFSET; y2 += OFFSET;
for (let x = x1; x < x2; x++) {
    for (let y = y1; y < y2; y++) {
        blocks[x][y] = 1;
    }
}

// 2. 직사각형 지우기
[x1, y1, x2, y2] = rect2;
x1 += OFFSET; y1 += OFFSET;
x2 += OFFSET; y2 += OFFSET;
for (let x = x1; x < x2; x++) {
    for (let y = y1; y < y2; y++) {
        blocks[x][y] = 0;
    }
}

// 3. 최소, 최대 x와 y 구하기
const isOne = (a) => a == 1;

const x_map = blocks.map((v) => v.find(isOne));
const min_x = x_map.findIndex(isOne);
const max_x = x_map.findLastIndex(isOne);

const transposed = (origin) => {
    return origin[0].map((_, i) => origin.map(row => row[i])) // 열 <-> 행
};

const t_map = transposed(blocks); // 전치
const y_map = t_map.map((v) => v.find(isOne));
const min_y = y_map.findIndex(isOne);
const max_y = y_map.findLastIndex(isOne);

// 4. 결과 반환
if ((max_x == min_x) && (max_y == min_y)) console.log(0);
else console.log((max_x - min_x + 1) * (max_y - min_y + 1));
