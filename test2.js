let b = 14;
let yellow = 4;
let answer = [];
let centers = [];
function makeCenter(y, i) {
    const root = Math.ceil(Math.sqrt(y));
    if (i === root+1) return;
    if (y % i === 0) centers.push([y/i, i]);
    i++;
    makeCenter(y, i);  
}

// makeCenter(yellow, 1);

for (let i=0; i<centers.length; i++) {
    console.log(centers[i][0]*2 + centers[i][1]*2 + 4);
    if (centers[i][0]*2 + centers[i][1]*2 + 4 === b) return console.log(centers[i][0]+2, centers[i][1]+2);
    // return answer.push(centers[i][0]+2, centers[i][1]+2);
}


console.log(makeCenter(yellow, 1), centers, answer);