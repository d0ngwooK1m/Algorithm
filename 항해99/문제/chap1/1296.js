const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString()
  : `LOVE
2
LOVE
LOVELOVE`
).split('\n');

// console.log(stdin);

const answer = () => {
  const name = stdin[0];
  let winRate = 0;
  let winName;
  const nameArr = [];
  for (let i = 2; i < stdin.length; i++) {
    nameArr.push(stdin[i] + name);
  }
  // console.log(nameArr);
  nameArr.sort().reverse();
  console.log(nameArr);
  for (let j = 0; j < nameArr.length; j++) {
    let cntL = 0;
    let cntO = 0;
    let cntV = 0;
    let cntE = 0;
    const string = nameArr[j];
    for (let k = 0; k < string.length; k++) {
      // console.log(string[k]);
      if (string[k] === 'L') {
        // console.log('passL');
        cntL++;
      } else if (string[k] === 'O') {
        // console.log('passO');
        cntO++;
      } else if (string[k] === 'V') {
        // console.log('passV');
        cntV++;
      } else if (string[k] === 'E') {
        // console.log('passE');
        cntE++;
      }
    }
    console.log(cntL, cntO, cntV, cntE);
    const rate = ((cntL + cntO) * (cntL + cntV) * (cntL + cntE) * (cntO + cntV) * (cntO + cntE) * (cntV + cntE)) % 100;
    // console.log(rate);
    if (winRate <= rate) {
      winRate = rate;
      winName = string;
    }
    console.log(winRate);
  }
  
  console.log(winName.substr(0, (winName.length) - name.length));
  return;
};
answer();

