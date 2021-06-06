const input = `4
0 10 15 20
5 0 9 10
6 13 0 12
8 8 9 0`.split('\n');

const n = Number(input[0]);
let w = [];
for (let i=1; i<=n; i++) {
    w.push(input[i].split(' ').map((x) => Number(x)));
}
let d = Array(n).fill(0).map((val, idx) => val+idx);
let ans = Number.MAX_SAFE_INTEGER;

const nextPermutation = function (a) {
    let i = n-1;
    while (i > 0 && a[i-1] >= a[i]) i -= 1;
    if (i <= 0) return false;

    let j = n-1;
    while (a[j] <= a[i-1]) j -= 1;
    let temp = a[i-1];
    a[i-1] = a[j];
    a[j] = temp;

    j = n-1;
    while (i < j) {
        temp = a[i];
        a[i] = a[j];
        a[j] = temp;
        i += 1;
        j -= 1;
    }
    return true;
}

while (true) {
    let ok = true;
    let s = 0;
    for (let i=0; i<n-1; i++) {
        if (w[d[i]][d[i+1]] === 0) {
            ok = false;
            break;
        } else {
            s += w[d[i]][d[i+1]];
        }
    }
    if (ok && w[d[n-1]][d[0]] !== 0) {
        s += w[d[n-1]][d[0]];
        ans = Math.min(ans, s);
    }
    if (!nextPermutation(d)) break;
    if (d[0] !== 0) break;
}
console.log(ans);