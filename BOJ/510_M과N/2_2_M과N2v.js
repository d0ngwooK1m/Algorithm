//들어갈 수를 정해놓고 숫자를 뽑아 오름차순으로 정렬하는 방법
let input = `4 2`.split(' ');

const n = Number(input[0]);
const m = Number(input[1]);

let numToPick = Array(m).fill(0);

let answer = '';

const go = function (index, selected, n, m) {
    if (selected === m) {
        for (let i=0; i<m; i++) {
            answer+=`${numToPick[i]} `;
        }
        answer+='\n';
        return;
    }
    if (index > n) return;
    numToPick[selected] = index;
    go(index+1, selected+1, n, m);
    numToPick[selected] = 0;
    go(index+1, selected, n,m);
}

go(1, 0, n, m);
console.log(answer);