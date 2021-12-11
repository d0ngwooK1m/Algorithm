const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString()
  : `6
3 4 2 12 6 8`
).split('\n');

const length = Number(stdin[0]);
const arr = stdin[1].split(' ').map(Number).sort((a, b) => a - b);
// let myArr = [];
let number = arr[arr.length - 1] * 2;

for (let i = number; i <= 1000000; i++) {
  // console.log(i);
  let exit1 = false;
  let exit2 = false;
  let cnt = 0;
  for (let j = 0; j < arr.length; j++) {
    console.log(i, arr[j], cnt);
    if (i % arr[j] !== 0) {
      exit1 = true;
      break;
    } else {
      cnt++;
    }
  }
  // console.log(exit1, exit2);
  if (exit1) break;
  // console.log('cnt1', cnt);
  // console.log(number);
  for (let k = 2; k < i; k++) {
    if (number % k === 0) {
      cnt++;
    }
    // console.log('cnt2', cnt);
    // console.log('arrLength', arr.length);
    if (cnt > arr.length) {
      exit2 = true;
      break;
    }
  }


  if (!exit1 && !exit2) {
    number = i;
    break;
  };
}
console.log(number);
