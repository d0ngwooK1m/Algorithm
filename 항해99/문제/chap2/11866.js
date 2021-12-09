const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString()
  : `7 3`
).split(' ').map(Number);

const emptyArr = Array(stdin[0]).fill(0);
const fullNum = stdin[0];
const deleteNum = stdin[1];
const numArr = emptyArr.map((val, idx) => val = idx + 1);
const answerArr = [];
// console.log(numArr.join(', '));

const answer = () => {
  while (answerArr.length !== fullNum) {
    let cnt = 1;
    while (cnt < deleteNum) {
      numArr.push(numArr.shift());
      cnt++;
    }
    answerArr.push(numArr.shift());
  }
  console.log(`<${answerArr.join(', ')}>`);
};
answer();
