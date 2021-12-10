const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString()
  : `5
3 1 4 3 2`
).split('\n');
const arr = stdin[1].split(' ').map(Number);
const sortedArr = arr.sort((a, b) => a - b);
let sum = 0;
let answer = 0;
for (let i = 0; i < sortedArr.length; i++) {
  sum = sum + sortedArr[i];
  answer += sum;
}
console.log(answer);