const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString()
  : `2
10 12 80
30 50 72`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let t = input();

// console.log(t--);
while (t--) {
  const [h, w, guest] = input().split(' ').map(Number);
  // console.log(w, h, guest);
  if (guest % h === 0) {
    // const string = `${h}0${Math.floor(guest % (w * h) / h)}`;
    const answer = (h * 100) + (guest / h);
    console.log(answer);
  } else {
    // const string = `${guest % h}0${Math.floor(guest / h) + 1}`;
    const answer = (guest % h) * 100 + (Math.floor(guest / h) + 1);
    console.log(answer);
  }
};