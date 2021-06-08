const input = `3 1`.split(' ');
let answer = '';

const n = Number(input[0]);
const m = Number(input[1]);

let checkUsed = Array(n+1).fill(false);
let fillArr = Array(m).fill(0);

const go = function (index, start, n, m) {
    if (index === m) {
        for (let i=0; i<m; i++) {
            answer+=`${fillArr[i]}`;
            if (i !== m-1) answer+=' ';
        }
        answer+='\n';
        return;
    }

    for (let i=start; i<=n; i++) {
        if (checkUsed[i]) continue;
        checkUsed[i] = true;
        fillArr[index] = i;
        go(index+1, i+1, n, m);
        checkUsed[i] = false;
    }

}

go(0, 1, n, m);
console.log(answer);