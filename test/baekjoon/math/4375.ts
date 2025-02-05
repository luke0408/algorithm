import test from "node:test"
import { solution } from "../../../src/math/baekjoon/one/4375"
import { deepEqual } from "node:assert";

test('test', () => {
    const input = `
    3
    7
    9901
    `;

    const output = [3, 6, 12]

    const result = solution(input);
    deepEqual(result, output);
});