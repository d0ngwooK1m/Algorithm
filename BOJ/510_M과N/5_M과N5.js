const input = `4 4
1231 1232 1233 1234`.split('\n');

const n = Number(input[0][0]);
const m = Number(input[0][2]);

const numbers = input[1].split(' ').map((x) => Number(x));
let c = Array(numbers.length+1).fill(false);
let a = Array(n).fill(0);

let answer = '';
let cnt = 0;

const go = function (index, n, m) {
    if (index === m) {
        for (let i=0; i<m; i++) {
            answer+=`${a[i]}`
            if (i !== m-1) answer+=' ';
        }
        answer+='\n';
        return;
    }
    for (let i=1; i<=n; i++) {
        if (c[i]) continue;
        c[i]=true;
        a[index]=numbers[i-1];
        go(index+1, n, m);
        c[i]=false;
    }
}

go(0, n, m);
console.log(answer);