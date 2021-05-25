let input = `abc
9
L
L
L
L
L
P x
L
B
P y`.split('\n');

let chars = input[0];
let stack = chars.split('');
let stack2 = [];

let length = Number(input[1])+1;

for(let i=2; i<=length; i++) {
    if(input[i][0] === 'P'){
        stack.push(input[i][2]);
    } else if(input[i][0] === 'L' && stack.length !== 0) {
        stack2.push(stack.pop());
    } else if(input[i][0] === 'D' && stack2.length !== 0) {
        stack.push(stack2.pop());
    } else if(input[i][0] === 'B' && stack.length !== 0) {
        stack.pop();
    }
}

while (stack2.length) {
    stack.push(stack2.pop());
}

console.log(stack.join(""));
//1406 split join stack 활용