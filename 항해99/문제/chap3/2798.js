const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString()
  : `10 500
93 181 245 214 315 36 185 138 216 295`
).split('\n');

const targetNum = Number(stdin[0].split(' ')[1]);
const arr = stdin[1].split(' ').map(Number);
let max = 0;

const solution = () => {
  for (let i = 0; i < arr.length; i++) {
    const card1 = arr[i];
    for (let j = 0; j < arr.length; j++) {
      const card2 = arr[j];
      if (i === j) {
        continue;
      }
      for (let k = 0; k < arr.length; k++) {
        const card3 = arr[k];
        if (i === k || j === k) {
          continue;
        }
        if (card1 + card2 + card3 <= targetNum && card1 + card2 + card3 > max) {
          // console.log(card1, card2, card3);
          max = card1 + card2 + card3;
        }
      }
    }
  }
  console.log(max);
};
solution();