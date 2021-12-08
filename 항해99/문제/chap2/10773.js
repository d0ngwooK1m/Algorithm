const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString()
  : `4
3
0
4
0`
).split('\n');

const input = stdin.map(Number);
// console.log(input);

// const answer = () => {
//   const stack = [];
//   let sum = 0;
//   for (let i = 1; i < input.length; i++) {
//     if (input[i] !== 0) {
//       stack.push(input[i]);
//     } else if (input[i] === 0) {
//       stack.pop();
//     }
//   }
//   // console.log('result', stack);
//   // const result = stack.reduce((sum, currentValue) => sum + currentValue, 0);
//   // if (stack.length === 0) {
//   //   console.log(0);
//   //   return;
//   // }
//   for (let j = 0; j < stack.length; j++) {
//     sum += stack[j];
//   }
//   console.log(sum);
//   return;
// };
// answer();

const stack = [];
let sum = 0;
for (let i = 1; i < input.length; i++) {
  if (input[i] !== 0) {
    stack.push(input[i]);
  } else if (input[i] === 0) {
    stack.pop();
  }
}
// console.log('result', stack);
// const result = stack.reduce((sum, currentValue) => sum + currentValue, 0);
// if (stack.length === 0) {
//   console.log(0);
//   return;
// }
for (let j = 0; j < stack.length; j++) {
  sum += stack[j];
}
console.log(sum);