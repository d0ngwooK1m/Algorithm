const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString()
  : `15
push 1
push 2
front
back
size
empty
pop
pop
pop
size
empty
pop
push 3
empty
front`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();
const queue = [];
// let answer = '';

let t = input();
while (t--) {
  const [command, numberString] = input().split(' ');
  if (numberString === undefined) {
    if (command === 'pop') {
      if (queue.length !== 0) {
        const poppedNum = queue.shift();
        // answer += `${poppedNum}\n`;
        console.log(poppedNum);
      } else {
        // answer += '-1\n';
        console.log(-1);
      }
    }
    if (command === 'size') {
      // answer += `${queue.length}\n`;
      console.log(queue.length);
    } else if (command === 'empty') {
      if (queue.length === 0) {
        // answer += '1\n';
        console.log(1);
      } else {
        // answer += '0\n';
        console.log(0);
      }
      // queue.length === 0 ? answer += '1\n' : answer += '0\n'
    }
    if (command === 'front') {
      if (queue.length !== 0) {
        // answer += `${queue[0]}\n`
        console.log(queue[0]);
      } else {
        // answer += '-1\n';
        console.log(-1);
      }
      // queue.length !== 0 ? answer += `${queue[0]}\n` : answer += '-1\n'
    }
    if (command === 'back') {
      if (queue.length !== 0) {
        // answer += `${queue[queue.length - 1]}\n`
        console.log(queue[queue.length - 1]);
      } else {
        // answer += '-1\n';
        console.log(-1);
      }
      // queue.length !== 0 ? answer += `${queue[queue.length - 1]}\n` : answer += '-1\n'
    };
  } else {
    const number = Number(numberString);
    queue.push(number);
  }
};

// console.log(answer);