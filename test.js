const n = "4177252841";
const k = 4;

function solution(number, k) {
    let answer = '';
    let cnt = 0;
    let numArr = number.split('').map((x) => Number(x));
    let stack = [];
    const check = function () {}
    const n = numArr.length;
    for (let i=0; i<n; i++) {
        if (cnt === k) break;
        stack.push(numArr.shift());
        stack.filter((val) => {
            if (val < numArr[0]) {
                stack.pop();
                cnt++;
            }
        })
        console.log(stack ,numArr, cnt);
    }
    answer+=numArr.join('')
    return answer;
}

console.log(solution(n, k));