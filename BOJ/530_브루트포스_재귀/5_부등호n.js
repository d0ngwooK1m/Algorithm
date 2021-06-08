const input = `2
< > `.split('\n');

const n = Number(input[0]);
const a = input[1].split(' ');
let ans = [];
let check = Array(10).fill(false);

const ok = function (num) {
    for (let i=0; i<n; i++) {
        if (a[i] === '<') {
            if (num[i] > num[i+1]) return false;
        } else if (a[i] === '>') {
            if (num[i] < num[i+1]) return false;
        }
    }
    return true;
}

const go = function (index, num) {
    if (index === n+1) {
        if (ok(num)) {
            ans.push(num)
        }
        return;
    }
    for (let i=0; i<10; i++) {
        if (check[i]) continue;
        check[i] = true;
        go(index+1, num+i);
        check[i] = false;
    }
}
go(0, '')
ans.sort();
console.log(ans[ans.length-1]);
console.log(ans[0]);