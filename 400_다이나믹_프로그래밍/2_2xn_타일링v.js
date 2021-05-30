let input = `9`.split(' ').map(x => Number(x));
let n = input[0];
let d = Array(1001).fill(0);
d[0] = 1;
d[1] = 1;
for (let i=2; i<=n+1; i++) {
    d[i] = d[i-1] + d[i-2]
    d[i] %= 10007;
}
console.log(d[n]); 
