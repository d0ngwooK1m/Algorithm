const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString()
  : `11`
);

const sugar = Number(stdin);

const answer = () => {
  if (sugar % 5 === 0) {
    console.log(sugar / 5);
    return;
  } else if (sugar % 5 !== 3) {
    // if (sugar % 3 !== 0 && (sugar - 5) % 3 !== 0) {
    //   console.log(-1);
    //   return;
    // }
    // if (sugar % 3 !== 0 && (sugar - 5) % 3 === 0) {
    //   console.log(((sugar - 5) / 3) + 1);
    //   return;
    // }
    // console.log(Math.floor(sugar / 3));
    // return;
    let newSugar = sugar;
    let sugarThree = 0;
    while (newSugar % 5 !== 0) {
      newSugar -= 3;
      sugarThree++;
      if (newSugar < 3) break;
      // console.log(sugarThree, newSugar);
    }
    if (newSugar < 3 && newSugar !== 0) {
      console.log(-1);
      return;
    }
    console.log(sugarThree + (newSugar / 5));
    return;
  } else if (sugar % 5 === 3) {
    console.log(Math.floor(sugar / 5) + 1);
    return;
  }
};
answer();