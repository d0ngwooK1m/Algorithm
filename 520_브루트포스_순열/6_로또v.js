const input = `7 1 2 3 4 5 6 7
8 1 2 3 5 8 13 21 34
0`.split('\n');

const nextPermutation = function (a) {
    let i = a.length-1;
    while (i > 0 && a[i-1] >= a[i]) i -= 1;
    if (i <= 0) return false;

    let j = a.length-1;
    while (a[j] <= a[i-1]) j -= 1;
    let temp = a[j];
    a[j] = a[i-1];
    a[i-1] = temp;

    j = a.length-1;
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
    let n;
    let a;
    if (n == 0) break;
    let zeros = Array(n-6).fill(0);
    let ones = Array(6).fill(0);
    let d = [...zeros, ...ones];
    let ans = [];
    while (true) {
        let cur = [a[i] ]
    } 
}