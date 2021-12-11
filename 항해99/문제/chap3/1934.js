const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString()
  : `3
1 45000
6 10
13 17`
).trim().split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let t = input();
while (t--) {
  let gcd;
  let lcm;
  const [m, n] = input().split(' ').map(Number).sort((a, b) => b - a);

  for (let i = n; i >= 1; i--) {
    if (m % i === 0 && n % i === 0) {
      gcd = i;
      break;
    }
  }
  lcm = (m / gcd) * (n / gcd) * gcd;
  console.log(lcm);
}