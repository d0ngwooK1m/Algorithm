let input = `1 2 3`.split(' ').map(x => Number(x));

let e = input[0];
let s = input[1];
let m = input[2];
let answer = '';

e-=1;
s-=1;
m-=1;
for (let i=0;; i++) {
    if (i % 15 === e && i % 28 === s && i % 19 === m) {
        answer+=`${i+1}\n`;
        break;
    }
}
console.log(answer);