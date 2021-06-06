const input = `6
20 1 15 8 4 10`.split('\n');

const n = Number(input[0]);
let a = input[1].split(' ').map((x) => Number(x)).sort((a, b) => a-b);
let ans = 0;

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
    // console.log(a);
    return true;
}

const calc = function (a) {
    let ans = 0;
    for (let i=1; i<n; i++) {
        ans += Math.abs(a[i]-a[i-1]);
        // console.log(ans);
    }
    return ans;
}

while (true) {
    temp = calc(a);
    ans = Math.max(ans, temp);
    if (!nextPermutation(a)) break;
}

console.log(ans);