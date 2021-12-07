const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString()
  : `1
10
13
100
1000
10000
100000
0`
).split('\n');

const answer = () => {
  for (let i = 0; i < stdin.length - 1; i++) {
    let cnt = 0;
    const number = Number(stdin[i]);
    // console.log(number);
    for (let j = number + 1; j <= number * 2; j++) {
      let warning = false;
      const rangeNum = j;
      // let cnt = 0;
      for (let k = 2; k <= Math.sqrt(rangeNum); k++) {
        if (rangeNum % k === 0 && rangeNum !== 2) {
          warning = true;
          break;
        }
      }
      if (!warning) cnt++;
    }
    if (cnt !== 0) console.log(cnt);
  }
  return;
};
answer();
