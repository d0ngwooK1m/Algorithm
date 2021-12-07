const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString()
  : `4
0 0 13 40 0 37
0 0 3 0 7 4
1 1 1 1 1 5
0 0 1 0 1 5`
).split('\n');


const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let t = input();
// console.log(t--);
while (t--) {
  const [x1, y1, r1, x2, y2, r2] = input().split(' ').map(Number);
  console.log(x1, y1, r1, x2, y2, r2);
  const distance = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
  console.log('거리', distance);
  if (x1 === x2 && y1 === y2 && r1 === r2) {
    console.log(-1);
  }
  else if (x1 === x2 && y1 === y2 && r1 !== r2) {
    console.log(0);
  }
  else if (distance + r1 >=  r2) {
    console.log(0);
  }
  else if (distance  >=  r1 + r2) {
    console.log(0);
  }
  else if (distance + r1 ==  r2 && (distance <= r1 || distance <= r2)) {
    console.log(1);
  }
  else if (distance == r1 + r2 && (distance > r1 && distance > r2)) {
    console.log(1);
  }
  else if (distance < r1 + r2) {
    console.log(2);
  }
}
// console.log(t);
