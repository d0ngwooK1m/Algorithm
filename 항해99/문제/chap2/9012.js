const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString()
  : `3
((
))
())(()`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let t = input();
while (t--) {
  const arr = input().split('');
  const stack = [];
  let check = true;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '(' && stack[stack.length - 1] !== ')') {
      stack.push(arr[i]);
    } else if (arr[i] === ')' && stack[stack.length - 1] === '(') {
      stack.pop();
    } else {
      check = false;
    }
  }
  if (check === false || stack.length !== 0) {
    console.log("NO");
  } else {
    console.log("YES");
  }
}