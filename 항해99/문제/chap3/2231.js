const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString()
  : `2`
)

const targetNum = Number(stdin);
const targetNumLength = targetNum.toString().split('').length;
const solution = () => {
  let answer = 1;
  let isExist = false;
  while (answer <= targetNum) {
    const sum = answer.toString().split('').map(Number).reduce((prevNum, currentNum) => prevNum + currentNum, 0);
    if ((answer + sum) === targetNum) {
    isExist = true;
    break;
  }
  answer++;
  // console.log(answer, sum);
}
if (isExist) {
  console.log(answer);
} else {
  console.log(0);
}
};
solution();
