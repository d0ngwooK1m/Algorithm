const fs = require('fs');
const stdin = (process.flatform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString()
  : `19`
).split('\n');


// const answer = (n) => {
//   if (n === 0) {
//     // console.log(sum);
//     return sum = sum + 1;
//   } else {
//     sum = sum + 4 + ((n - 1) * 3);
//     // console.log(n)
//     // console.log(sum);
//     return answer(n - 1);
//   }
// }
let number = Number(stdin[0]);
let sum = 0;

const answer = (n) => {
  while (n > 0) {
    sum = sum + 4 + ((n - 1) * 3);
    n--;
  }
};
answer(number);
const rest = (sum + 1) % 45678;
console.log(rest);
console.log((sum + 1) % 45678);

// let answer = 5;
// for (let i = 2; i <= number; i++) {
//   answer += 3 * i + 1;
// }

// answer %= 45678;
// console.log(number);
