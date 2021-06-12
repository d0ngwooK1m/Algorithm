let y = 22;
let b = 50;
let result = [];
let centers = [];
let answer = [];

function makeCenter(y, i) {
    if (y <= 0 && centers.length > centers[0]) return result.push(centers);
    if (y % i === 0) centers.push(i);
    else return;
    y-=i;
    makeCenter(y, i); 
    
}

// makeCenter(6, 1);

for (let i=1; i<=y; i++) {
    centers = [];
    makeCenter(y, i);
}

for (let j=0; j<result.length; j++) {
    if (result[j].length*2 + result[j][0]*2 + 4 === b) {
        answer.push(result[j].length+2);
        answer.push(result[j][0]+2);
        break;
    }
    console.log(answer);
}

console.log(answer);