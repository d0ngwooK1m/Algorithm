const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString()
  : `20`
);

const number = Number(stdin);
const arr = [0, 1];
const fibonacci = (num, arr) => {
  if (arr[num] !== undefined) {
    return arr[num];
  }
  const nthFibo = fibonacci(num - 1, arr) + fibonacci(num - 2, arr);
  arr[num] = nthFibo;
  return nthFibo;
}
fibonacci(number, arr);
console.log(arr[number]);