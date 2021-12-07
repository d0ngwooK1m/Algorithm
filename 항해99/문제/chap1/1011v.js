const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin')
  : `3
0 3
1 5
45 50`
).split('\n');

// console.log(stdin);
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let t = input();
// console.log(t);
while (t--) {
  const [x, y] = input().split(' ').map(Number);
  const answer = (distance) => {
    let i = 0;
    while (i <= distance) {
      if (distance > i * i && distance <= i * i + i) {
        return 2 * i;
      } else if (distance <= (i + 1) * (i + 1)) {
        return i * 2 + 1;
      }
      i += 1;
    }
  };
  console.log(answer(y - x));
};