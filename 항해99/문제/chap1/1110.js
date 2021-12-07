const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString()
  : `77`
);

const number = Number(stdin);
// console.log(number);

const answer = (n) => {
  let cycle;
  let cnt = 0;
  if (n < 10) {
    cycle = n * 10 + n;
    cnt++;
  } else {
    cycle = ((n % 10) * 10) + ((Math.floor(n / 10) + n) % 10);
    cnt++;
  }
  // console.log(cycle);
  while (number !== cycle) {
    // console.log(number, cycle);
    if (cycle < 10) {
      cycle = cycle * 10 + cycle;
      cnt++;
    } else {
      cycle = (cycle % 10) * 10 + ((Math.floor(cycle / 10) + cycle % 10) % 10);
      cnt++;
    }
  }
  console.log(cnt);
};
answer(number);