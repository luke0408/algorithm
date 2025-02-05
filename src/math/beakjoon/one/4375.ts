/**
 * baekjoon - 4375번 문제 [실버 Ⅲ]
 * 
 * [문제]
 * 2와 5로 나누어 떨어지지 않는 정수 n(1 ≤ n ≤ 10000)가 주어졌을 때, 
 * 각 자릿수가 모두 1로만 이루어진 n의 배수를 찾는 프로그램을 작성하시오.
 * 
 * [입력]
 * 입력은 여러 개의 테스트 케이스로 이루어져 있다. 
 * 각 테스트 케이스는 한 줄로 이루어져 있고, n이 주어진다.
 * 
 * [출력]
 * 각 자릿수가 모두 1로만 이루어진 n의 배수 중 가장 작은 수의 자리수를 출력한다.
 */

// const fs = require("fs");
// const input: string = fs.readFileSync("/dev/stdin").toString();

export const solution = (stdinInput: string) => {
  const input: number[] = stdinInput.trim().split("\n").map((str) => Number(str));
  let result = new Array<number>;

  input.forEach((i) => {
    let digit = 1;
    let num = 1;
    while (1) {
      if (num % i === 0) break;
      num = Number(num.toString() + "1") % i;
      digit++;
    }
    result.push(digit);
    console.log(digit);
  });

  return result;
};

// solution(input);