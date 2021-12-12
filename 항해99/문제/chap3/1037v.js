const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString()
  : `14
14 26456 2 28 13228 3307 7 23149 8 6614 46298 56 4 92596`
).split('\n');

const length = Number(stdin[0]);
const arr = stdin[1].split(' ').map(Number).sort((a, b) => a - b);
if (arr.length === 1) {
  console.log(arr[0] ** 2);
} else {
  console.log(arr[0] * arr[arr.length - 1]);
}
