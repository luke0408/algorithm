function solution(s){
    var result = true;
    var stack = [];
    
    s.split('').forEach(c => {
        if (c === '(') stack.push('1');
        else if (c === ')') {
            if (stack.length) stack.pop();
            else result = false;
        };
    });
    
    if (!stack.length && result) result = true;
    else result = false;

    return result;
}