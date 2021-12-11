const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString()
  : `5 2`
).split(' ')

const [n, k] = stdin.map(Number).sort((a, b) => b - a);
const factorial = (num) => {
  let sum = 1;
  for (let i = 1; i <= num; i++) {
    sum *= i;
  }
  return sum;
}

const answer = factorial(n) / (factorial(k) * factorial(n - k));
console.log(answer);