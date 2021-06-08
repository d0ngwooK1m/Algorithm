const input = `3 3`.split(' ');

const n = Number(input[0]);
const m = Number(input[1]);

let c = Array(n+1).fill(false);
let a = Array(m).fill(0);

let answer = '';

const go = function (index, n, m) {
    if (index === m) {
        for (let i=0; i<m; i++) {
            answer+=`${a[i]}`
            if (i !== m-1) {
                answer+=' ';
            }
        }
        answer+='\n';
        return;
    }
    for (let i=1; i<n; i++) {
        if (c[i]) continue;
        a[i] = i;
        c[i] = true;
        go(index+1, n, m);
        c[i] = false;
    }

}