const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString()
  : `55-50+40`
);

const solution = () => {
  let answer = 0;
  const splitMinus = stdin.split('-');
  //['55, '50+40']
  for (let i = 0; i < splitMinus.length; i++) {
    const chunckArr = splitMinus[i];
    const splittedArr = chunckArr.split('+').map(Number);
    //[55], [50, 40]
    const sum = splittedArr.reduce((prevVal, currentVal) => prevVal + currentVal, 0);
    // console.log(sum);
    if (i === 0) {
      answer += sum;
    } else {
      answer -= sum;
    }
  }
  console.log(answer);
  return;
};
solution();