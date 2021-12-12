const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString()
  : `12
1 1
1 24
5 11
4 30
5 24
5 28
16 23
6 29
7 25
8 23
16 29
15 29`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let t = input();
while (t--) {
  const [max, min] = input().split(' ').map(Number).sort((a, b) => b - a);
  const factorial = (num) => {
    if (num === 1 || num === 0) return 1;
    return num * factorial(num - 1);
  }
  const count = Math.round((factorial(max)) / (factorial(min) * factorial(max - min)));
  console.log(count);
}