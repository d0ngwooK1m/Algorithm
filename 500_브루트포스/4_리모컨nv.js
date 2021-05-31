let input = `5457
3
6 7 8`.split('\n');
let n = Number(input[0]);
let m = Number(input[1]);
let broken = Array(10).fill(false);
let a;

// 고장난 버튼 설정
if (m > 0) {
    a = input[2].split(' ').map(x => Number(x));
} else {
    a = [];
}

// 다이얼에 고장난 버튼 넣기
for (let x of a) {
    broken[x] = true;
}


let possible = function (c) {
    if (c === 0) {
        if (broken === 0) {
            return 0;
        } else {
            return 1;
        }
    }
    let l = 0;
    while (c > 0) {
        if (broken[c % 10]) return 0;
        l += 1;
        c = Math.floor(c / 10);
    }
    return l;
}

let ans = Math.abs(n-100);
for (let i=0; i<1000000+1; i++) {
    c = i;
    l = possible(c);
    if (l > 0) {
       let press = Math.abs(c-n);
       if (ans > l + press) {
           ans = l + press;
       }
    }
}

console.log(ans);