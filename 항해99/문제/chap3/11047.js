const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString()
  : `10 4790
1
5
10
50
100
500
1000
5000
10000
50000`
).split('\n');
let targetMoney = stdin[0].split(' ').map(Number)[1];
const length = stdin[0].split(' ').map(Number)[0];
const moneyArr = stdin.map(Number);
moneyArr.shift();
//[NaN, 1, 2, 3]
// console.log(targetMoney, moneyArr);
let cnt = 0;
for (let i = length - 1; i >= 0; i--) {
  // console.log(moneyArr[i]);
  if (targetMoney / moneyArr[i] < 1) {
    continue;
  } else {
    cnt += Math.floor(targetMoney / moneyArr[i]);
    targetMoney = (targetMoney % moneyArr[i]);
    // console.log(targetMoney);
  }
}
console.log(cnt);

