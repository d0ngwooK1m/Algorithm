const input = `4
-+0++++--+ `.split('\n');

const check = function (index) {
    let sum = 0;
    for (let i=index; i>=0; i--) {
        sum += ans[i];
        if (sign[i][index] === 0) {
            if (sum !== 0) return false;
        } else if (sign[i][index] < 0) {
            if (sum >= 0) return false;
        } else if (sign[i][index] > 0) {
            if (sum <= 0) return false;
        }
    }
    return true;
}

const go = function (index) {
    if (index === n) return true;
    if (sign[index][index] === 0) {
        ans[index] = 0;
        return check(index) && go(index+1);
    }

    for (let i=1; i<=10; i++) {
        ans[index] = sign[index][index]*i;
        if (check(index) && go(index+1)) return true;
    }
    return false;
}

const n = Number(input[0]);
const s = input[1].split('');

let sign = [];
for (let i=1; i<=n; i++) {
    sign.push(Array(i).fill(0));
}
let ans = Array(n).fill(0);
let cnt = 0;

for (let i=0; i<n; i++) {
    for (let j=i; j<n; j++) {
        if (s[cnt] === '0') {
            sign[i][j] = 0;
        } else if (s[cnt] === '+') {
            sign[i][j] = 1;
        } else {
            sign[i][j] = -1;
        }
        cnt += 1;
    }
}
go(0);
console.log(ans.join(' '));