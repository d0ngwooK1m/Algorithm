/*
let input = `10`.split(' ').map(x => Number(x));
let d = Array(1000001).fill(0);

let go = function (n) {
    let temp;
    if (n === 1) return 0;
    if (d[n] > 0) return d[n];
    d[n] = go(n-1) + 1;
    if (n%2 === 0) {
        temp = go(n/2) + 1;
        if(d[n] > temp) d[n] = temp;
    }
    if(n%3 === 0) {
        temp = go(n/3) + 1;
        if (d[n] > temp) d[n] = temp;
    }
    return d[n];
}

console.log(go(input[0]));
// top-bottom 방식
*/

let input = `10`.split(' ').map(x => Number(x));
let n = input[0];
let d = Array(n+1).fill(0);
for (let i=2; i<=n; i++) {
    d[i] = d[i-1] + 1;
    if (i%2 === 0 && d[i] > d[i/2] + 1) {
        d[i] = d[i/2] + 1;
    }
    if(i%3 == 0 && d[i] > d[i/3] + 1) {
        d[i] = d[i/3] + 1;
    }
}

console.log(d[n]);
//bottom-top 방식