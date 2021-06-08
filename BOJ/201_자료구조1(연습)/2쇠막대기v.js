let input = `()(((()())(())()))(())`.split('');
let length = input.length;
let answer = 0;
let stack = [];

for(let i=0; i<length; i++) {
    if (input[i] === '(') {
        stack.push(i);
    } else if (input[i] === ')' && stack[stack.length - 1] === i-1) {
        stack.pop();
        answer+=stack.length;
    } else if (input[i] === ')' && stack[stack.length - 1] !== i-1) {
        stack.pop();
        answer+=1;
    }
}

console.log(answer);