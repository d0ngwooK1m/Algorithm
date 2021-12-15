const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin')
  : `4
1
2
3
4`
).trim().split('\n');

const length = Number(stdin[0]);
const steps = stdin.map(Number);
steps.shift();
// console.log(length, steps);

// const input = (() => {
//   let line = 0;
//   return () => stdin[line++];
// })();

// const steps = [];
// let t = input();
// while (t--) {
//   const point = Number(input());
//   steps.push(point);
// }

const dp = new Array(length).fill(0);
dp[0] = steps[0];
dp[1] = Math.max(steps[0] + steps[1], steps[1]);
dp[2] = Math.max(steps[0] + steps[2], steps[1] + steps[2]);

const score = (length, arr, dp) => {
  for (let i = 3; i < length; i++) {
    dp[i] = Math.max(arr[i] + arr[i - 1] + dp[i - 3], arr[i] + dp[i - 2]);
  }
};
score(length, steps, dp);
console.log(dp[length - 1]);