const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString()
  : `100 99 1000000000`
);
// console.log(stdin);
const numbers = stdin.split(' ').map(Number);
const up = numbers[0];
const slip = numbers[1];
const height = numbers[2];

const answer = () => {
  let time = Math.ceil((height - up) / (up - slip)) + 1;
  // const time = timeBeforeArrive + 1;
  console.log(time);
  return;
};
answer();