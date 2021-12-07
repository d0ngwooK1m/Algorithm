const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString()
  : `2
61 10`
).split('\n');

// console.log(stdin);
const costs = stdin[1].split(' ').map(Number);
// console.log(costs);
const y = (cost) => {
  let totalCost = 0;
  totalCost += Math.floor(cost / 30) * 10;
  if (cost % 30 < 30) {
    totalCost += 10;
  }
  // console.log(totalCost);
  return totalCost;
};

const m = (cost) => {
  let totalCost = 0;
  totalCost += Math.floor(cost / 60) * 15;
  if (cost % 60 < 60) {
    totalCost += 15;
  }
  // console.log(totalCost);
  return totalCost;
}

const answer = () => {
  let costY = 0;
  let costM = 0;
  for (let i = 0; i < costs.length; i++) {
    
    costY+=y(costs[i]);
    costM+=m(costs[i]);
  }
  // console.log(costY, costM);
  if (costY > costM) {
    console.log(`M ${costM}`);
  } else if (costY < costM) {
    console.log(`Y ${costY}`);
  } else if (costM === costY) {
    console.log(`Y M ${costY}`);
  }
};
answer();