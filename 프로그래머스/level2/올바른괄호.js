function solution(s){
    let answer = true;
    let stack = [];
    for (let i=0; i<s.length; i++) {
        if (s[i] === '(') stack.push(s[i]);
        else if (s[i] === ')' && stack.length !==0) stack.pop();
        else if (s[i] === ')' && stack.length === 0) {
            answer = false;
            break;
        }  
    }
    if (stack.length !== 0) answer = false;
    return answer;
}