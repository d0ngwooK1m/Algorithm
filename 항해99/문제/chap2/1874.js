const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString()
  : `5
1
2
5
3
4`
).split('\n').map(Number);

const length = stdin[0];
stdin.shift();
const input = stdin;
// console.log(length, input);

const answer = () => {
  let string = '';
  const stack = [];
  const result = [];
  let max = 1;
  let stop = false;
  for (let i = 0; i < length; i++) {
    const number = input[i];
    while (stack[stack.length - 1] !== number) {
      stack.push(max);
      max++;
      // console.log('max', max);
      if (max > length + 1) {
        stop = true;
        break;
      }
      // console.log('+');
      string += '+\n';
      // console.log(stack);
    }
    if (stop) {
      console.log('NO');
      return;
    }
    result.push(stack.pop());
    // console.log('-');
    string += '-\n';
    // console.log(result);
    // if (max < number) max = number;
  }
  console.log(string);
  return;
};
answer();