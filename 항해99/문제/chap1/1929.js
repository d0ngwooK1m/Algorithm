const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString()
  : `1 16`
);

// console.log(stdin);
const [startNum, endNum] = stdin.split(' ').map(Number);
// console.log(startNum, endNum);

const answer = () => {
  for (let i = startNum; i <= endNum; i++) {
    const number = i
    const sqrtNum = Math.sqrt(i);
    let checkNum = true;
    for (let j = 2; j <= sqrtNum; j++) {
      if (number % j === 0) {
        checkNum = false;
        break;
      }
    }
    if (checkNum && number !== 1) {
      console.log(number);
    }
  }
};
answer();