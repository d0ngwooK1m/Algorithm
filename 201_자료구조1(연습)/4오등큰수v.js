let input = `7
1 1 2 3 4 2 1`.split('\n');
let length = Number(input[0]);
let numbers = input[1].split(' ').map(x => Number(x));
let stack = [];
let answer = Array(length).fill();



for (let i=0; i<length; i++) {
    if (stack.length === 0) {
        stack.push(i);
    }
    while (stack.length !== 0 && numbers[stack[stack.length - 1]] < numbers[i]) {
        answer[stack[stack.length - 1]] = numbers[i];
        stack.pop();

    }
    stack.push(i);
}
while (stack.length !== 0) {
    answer[stack[stack.length - 1]] = -1;
    stack.pop();
}

let answerStr = answer.join(' ');
console.log(answerStr);