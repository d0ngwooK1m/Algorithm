let input = `8
20
42
0`.split('\n').map(x => Number(x));

let max = Math.max(...input);
let prime = Array(max);
let check = Array(max).fill(false);
let pn = 0;
let answer = '';

for (let i=2; i<=max; i++) {
    if(check[i] === false) {
        prime[pn++] = i;
        for (let j = i*i; j<=max; j+=i) {
            check[j] = true;
        }
    }
}

// for (let k=0; k<=end; k++) {
//     if(prime[k]>=start && prime[k]<=end) answer+=`${prime[k]}\n`;
// }

console.log(prime);