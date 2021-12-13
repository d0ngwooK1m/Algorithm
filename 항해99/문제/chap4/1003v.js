const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString()
  : `2
40
0`
).trim().split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++]
})();

let t = input();
while (t--) {
  const n = Number(input());
  const memo = [0, 1, 1]
  const fibonacci = (num, memo) => {
    if (memo[num] !== undefined) {
      return memo[num];
    }

    const nthFibo = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
    memo[num] = nthFibo;
    return nthFibo;
  }
  fibonacci(n, memo);
  const count0 = memo[n - 1] === undefined ? 1 : memo[n - 1];
  const count1 = memo[n];
  // console.log(count0, count1);
  console.log(`${count0} ${count1}`);
}