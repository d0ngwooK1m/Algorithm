const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `5
1 1
2 3
3 4
9 8
5 2
`
).split('\n');
 
const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();
 
// let t = input();
console.log(t);
while (t--) {
  // console.log(t);
  const [a, b] = input().split(' ').map(Number);
  console.log(a + b);
}

//실제문제 적용
// const fs = require('fs');
// const stdin = (process.platform === 'linux'
//     ? fs.readFileSync('/dev/stdin').toString()
//     : `1 1`
// ).split('\n');
// // console.log(stdin);
 
// const input = (() => {
//     let line = 0;
//     return () => stdin[line];
// })();
 
// let t = input();
// // console.log(t);
// const [a, b] = input().split(' ').map(Number);
// console.log(a + b);