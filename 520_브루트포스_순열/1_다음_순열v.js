const input = `5
5 4 3 2 1`.split('\n');

let n = Number(input[0]);
let a = input[1].split(' ').map((x) => Number(x));

const nextPermutation = function (a) {
    let i = a.length-1;
    while (i > 0 && a[i-1] >= a[i]) {
        i -= 1;
    }
    if (i <= 0) {
        return false;
    }
    let j = a.length-1;
    while (a[j] <= a[i-1]) {
        j -= 1;
    }
    let temp = a[i-1];
    a[i-1] = a[i];
    a[i] = temp;

    j = a.length-1;
    while (i < j) {
        let temp = a[i];
        a[i] = a[j];
        a[j] = temp;
        i += 1;
        j += 1;
    }
    return true;
}

if (nextPermutation(a)) {
    console.log(a.join(' '));
} else {
    console.log(-1);
}
