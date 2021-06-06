const input = `4
1 3 4 2`.split('\n');

const n = Number(input[0]);
let a = input[1].split(' ').map((x) => Number(x));

const pastPermutation = function (a) {
    let i = n-1;
    while (i > 0 && a[i-1] <= a[i]) i -= 1;
    if (i <= 0) return false;
    
    let j = n-1;
    while (a[j] >= a[i-1]) j -= 1;
    let temp = a[j];
    a[j] = a[i-1];
    a[i-1] = temp;

    j=n-1;
    while (i < j) {
        let temp = a[i];
        a[i] = a[j];
        a[j] = temp;
        i += 1;
        j -= 1;
    }

    return true;
}

if (pastPermutation(a)) {
    console.log(a.join(' '));
} else {
    console.log(-1);
}
