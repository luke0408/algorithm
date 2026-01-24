function solution(n) {
    var answer = hanoi(n);
    return answer;
}

function hanoi(n, from = 1, to = 3, aux = 2, result = []) {
    if (n === 1) {
        result.push([from, to]);
        return result;
    }
    
    hanoi(n-1, from, aux, to, result);
    result.push([from, to]);
    hanoi(n-1, aux, to, from, result);
    
    return result;
}