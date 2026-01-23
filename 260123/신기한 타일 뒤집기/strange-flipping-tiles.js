const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1).map((v) => v.split(' '));

// Please Write your code here.
const tiles = new Map();
let pos = 0;

const getTile = (p) => {
    let t = tiles.get(p);

    if (!t) {
        t = { state: 0 }
        tiles.set(p, t); // 0: un, 1: w, 2:b
    }

    return t;
}

for (let i = 0; i < n; i++) {
    const step = commands[i][1] === 'L' ? -1 : 1;

    for (let j = 0; j < commands[i][0]; j++) {
        const p = pos + step * j;
        const t = getTile(p);
        t.state = commands[i][1] === 'L' ? 1 : 2;

    }

    pos += step * (commands[i][0] - 1);
}

let w = 0, b = 0;
for (const t of tiles.values()) {
    if (t.state === 1) w++;
    else if (t.state === 2) b++;
}

console.log(`${w} ${b}`);
