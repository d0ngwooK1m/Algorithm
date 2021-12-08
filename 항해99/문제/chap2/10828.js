const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString()
  : `7
pop
top
push 123
top
pop
top
pop`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let answer = '';
const stack = [];
let t = input();
while (t--) {
  const [command, number] = input().split(' ');
  if (command === 'push') {
    stack.push(Number(number));
  } else if (command === 'pop') {
    if (stack[stack.length - 1] === undefined) {
      // console.log(-1);
      answer += '-1\n';
    } else {
      const poppedNum = stack.pop();
      // console.log(poppedNum);
      answer += `${poppedNum}\n`
    }
  } else if (command === 'size') {
    // console.log(stack.length);
    answer += `${stack.length}\n`;
  } else if (command === 'empty') {
    if (stack.length === 0) {
      // console.log(1);
      answer += '1\n';
    } else {
      // console.log(0);
      answer += '0\n';
    }
  } else if (command === 'top') {
    if (stack[stack.length - 1] === undefined) {
      // console.log(-1);
      answer += '-1\n';
    } else {
      // console.log(stack[stack.length - 1]);
      answer += `${stack[stack.length - 1]}\n`;
    }
  }
};
console.log(answer);