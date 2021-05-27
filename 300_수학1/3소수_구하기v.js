let input = `3 16`.split(' ');

let start = Number(input[0]);
let end = Number(input[1]);
let prime = Array(end);
let pn = 0;
let check = Array(end+1).fill(false);
let answer = '';

for (let i=2; i<=end; i++) {
    if(check[i] === false) {
        prime[pn++] = i;
        for (let j = i*i; j<=end; j+=i) {
            check[j] = true;
        }
    }
}

for (let k=0; k<=end; k++) {
    if(prime[k]>=start && prime[k]<=end) answer+=`${prime[k]}\n`;
}

console.log(answer);
//1929번