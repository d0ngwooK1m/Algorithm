const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `1000 100`
).split('\n');
// console.log(stdin);
 
const input = (() => {
    let line = 0;
    return () => stdin[line];
})();
 
let t = input();
// console.log(t);
const [a, b] = input().split(' ').map(BigInt);
const money = a / b;
const rest = a % b;
const answer = `${money}
${rest}`;
console.log(answer);
