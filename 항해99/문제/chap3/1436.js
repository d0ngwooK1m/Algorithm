const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString()
  : `500`
)

const targetNum = Number(stdin);
let num = 666;
let cnt = 0;
// console.log(num.toString().split('666'));
while (cnt !== targetNum) {
  if (num.toString().split('666').length >= 2) {
    cnt++;
  }
  if (num.toString().split('666').length >= 2 && cnt === targetNum) {
    break;
  }
  num++;
}
console.log(num);

