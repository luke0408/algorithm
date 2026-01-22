const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1).map(line => line.split(' '));

// Please Write your code here.
const tiles = new Map(); // {key: position, value: {w, b, state}}
let pos = 0;

const getTile = (p) => {
    let t = tiles.get(p);

    if (!t) {
        t = { w: 0, b: 0, state: 0 };
        tiles.set(p, t);
    }

    return t;
}

for (let i = 0; i < n; i++) {
    const step = commands[i][1] === 'L' ? -1 : 1;

    for (let j = 0; j < commands[i][0]; j++) {
        const p = pos + step * j;
        const t = getTile(p);

        if (t.state !== 3) {
            if (commands[i][1] === 'L') t.w += 1;
            else t.b += 1;

            if (t.w >= 2 && t.b >= 2) {
                t.state = 3; // gray, fixed
            } else {
                t.state = commands[i][1] === 'L' ? 1 : 2;
            }
        }
    }

    pos = pos + step * (commands[i][0] - 1);
}

let w = 0, b = 0, g = 0;
for (const t of tiles.values()) {
    if (t.state === 1) w++;
    else if (t.state === 2) b++;
    else if (t.state === 3) g++;
}

console.log(`${w} ${b} ${g}`);