const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString()
  : `2 5`
).trim().split(' ');

const input = stdin.map(Number).sort((a, b) => b - a);
const m = input[0];
const n = input[1];
let gcf;
let lcm;

for (let i = n; i >= 1; i--) {
  if (m % i === 0 && n % i === 0) {
    gcf = i;
    break;
  }
};

lcm = (m / gcf) * (n / gcf) * gcf;
console.log(`${gcf}
${lcm}`);



