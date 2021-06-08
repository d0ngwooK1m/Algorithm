let input = `3
4
7
10`.split('\n').map(x => Number(x));

let d = Array(11).fill(0);
d[0] = 1;
for (let j=1; j<11; j++) {
    if (j-1 >= 0) {
        d[j] += d[j-1]
    }
    if (j-2 >= 0) {
        d[j] += d[j-2]
    }
    if (j-3 >= 0) {
        d[j] += d[j-3]
    }
}

for (let n=1; n<input.length; n++) {
    console.log(d[input[n]]);
}


// let n = input[0];
// let d = Array(1001).fill(0);
// d[0] = 1;
// d[1] = 1;
// for (let i=2; i<=n+1; i++) {
//     d[i] = d[i-1] + 2*d[i-2];
//     d[i] %= 10007;
// }
// console.log(d[n]); 
