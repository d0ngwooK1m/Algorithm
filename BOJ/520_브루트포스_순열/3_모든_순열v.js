const input = `3`;

const n = Number(input[0]);
let a = Array(n).fill(0).map((v, idx) => v+idx+1);
let answer = '';

const permutation = function (a) {
    let i = n-1;
    while (i > 0 && a[i-1] >= a[i]) i -= 1;
    if (i <= 0) return false;

    let j = n-1;
    while (a[j] <= a[i-1]) j -= 1;
    let temp = a[j];
    a[j] = a[i-1];
    a[i-1]=temp;

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
    answer+=`${a.join(' ')}\n`;
    if (!permutation(a)) break;
}

console.log(answer);