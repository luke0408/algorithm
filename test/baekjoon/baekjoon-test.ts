import test from "node:test"
import { solution } from "../../src/temp/baekjoon_templete"
import { ok } from "node:assert";

test('templete input test', () => {
    const input = "test";
    const result = solution(input);
    ok(result.at(0) === input);
});