const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString()
  : `10 10
1 6 3 2 7 9 8 4 10 5`
).split('\n');
// console.log(stdin);
const firstArr = stdin[0].split(' ').map(Number);
const targetArr = stdin[1].split(' ').map(Number);
const answer = [];
const fullNum = firstArr[0];
const emptyArr = Array(fullNum).fill(0);
const fullArr = emptyArr.map((val, idx) => val = idx + 1);
// console.log(fullArr);
// const targetNum = firstArr[1];


const solution = () => {
  let cnt = 0;
  const left = () => {
    fullArr.unshift(fullArr.pop());
    cnt++;
  }
  const right = () => {
    fullArr.push(fullArr.shift());
    cnt++;
  }
  for (let i = 0; i < targetArr.length;) {
    // console.log(targetArr[i]);
    while (targetArr[i] !== fullArr[0]) {
      if (fullArr.indexOf(targetArr[i]) < fullArr.length / 2) {
        right();
      } else {
        left();
      }
    }
    answer.push(fullArr.shift());
    // console.log(targetArr[i], answer[i]);
    if (targetArr[i] === answer[i]) i++
    // console.log(fullArr, answer);
  }
  console.log(cnt);
};
solution();
// console.log(cnt);
