let input = `20
7
23
19
10
15
25
8
13`.split('\n').map(x => Number(x));
let n = input.length;
let sum = input.reduce((a, b) => a+b, 0);
let sortArr = input.sort((a, b) => a-b);
let answer = '';

for (let i=0; i<n; i++) {
    for (let j=i+1; j<n; j++) {
        if (sum - sortArr[i] - sortArr[j] === 100) {
            for (let k=0; k<n; k++) {
                if (i === k || j === k) continue;
                answer+=`${sortArr[k]}\n`;
            }
            return 0;
        } 
    }
}
console.log(answer);