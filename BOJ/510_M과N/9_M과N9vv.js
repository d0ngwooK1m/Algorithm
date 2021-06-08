const input = `4 2
9 7 9 1`.split('\n');

const n = Number(input[0][0]);
const m = Number(input[0][2]);

const numbers = input[1].split(' ').map((x) => Number(x)).sort((a, b) => a-b);
// let cnt = input[1].split(' ').map((x) => Number(x)).sort((a, b) => a-b);
let cnt = Array(n).fill(0); // 파이썬 정답보고 배열 만들기
let a = Array(m).fill(0);

let answer = '';

const go = function (index, n, m) {
    if (index === m) {
        for (let i=0; i<m; i++) {
            answer+=`${a[i]}`;
            if (i !== m-1) answer+=' ';
        }
        answer+='\n';
        return;
    }
    for (let i=0; i<n; i++) {
        if (cnt[i] > 0) {
            cnt[i] -= 1;
            a[index] = numbers[i];
            go(index+1, n, m);
            cnt[i] += 1;
        }
    }
}

go(0, n, m);
console.log(answer);