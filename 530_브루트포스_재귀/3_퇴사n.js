const input = `7
3 10
5 20
1 10
1 20
2 15
4 40
2 200`.split('\n');

const n = Number(input[0]);
let t = Array(n).fill(0);
let p = Array(n).fill(0);

for (let i=0; i<n; i++) {
    const elements = input[i+1].split(' ').map((x) => Number(x));
    t[i] = elements[0];
    p[i] = elements[1];
}

let ans = 0;

const go = function (day, s) {
    if (day === n+1) {
        ans = Math.max(ans, s);
        return;
    }
    if (day > n+1) return;
    go(day+1, s);
    go(day+t[day], s+p[day]);
}

go(1, 0);
console.log(ans);

// console.log(t, p);
// console.log(input);
