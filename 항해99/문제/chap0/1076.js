const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
  : `white
white
white`
).split('\n');
console.log(stdin);

const resist = {
  black: {
    plus: "0",
    multiply: 10**0,
  },
  brown: {
    plus: "1",
    multiply: 10**1,
  },
  red: {
    plus: "2",
    multiply: 10**2,
  },
  orange: {
    plus: "3",
    multiply: 10**3,
  },
  yellow: {
    plus: "4",
    multiply: 10**4,
  },
  green: {
    plus: "5",
    multiply: 10**5,
  },
  blue: {
    plus: "6",
    multiply: 10**6,
  },
  violet: {
    plus: "7",
    multiply: 10**7,
  },
  grey: {
    plus: "8",
    multiply: 10**8,
  },
  white: {
    plus: "9",
    multiply: 10**9,
  },
}

const answer = (resist[stdin[0]].plus + resist[stdin[1]].plus) * resist[stdin[2]].multiply;

console.log(answer);

//plus만 만들고 맨 뒤는 10**Number(resist[stdin[2].plus])로 계산하는 게 더 빠를 듯
