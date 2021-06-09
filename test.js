const n = "1231234";
const k = 3;

function solution(number, k) {
    let answer = '';
    let cnt = 0;
    let numArr = number.split('').map((x) => Number(x));
    const n = numArr.length;
    for (let i=0; i<n; i++) {
        let min = Math.min(...numArr);
        if (numArr[x] === min) {
            numArr.splice(x, 1);
        }
        if(num)
        console.log(numArr, min, cnt);
    }
    answer+=numArr.join('')
    return answer;
}

console.log(solution(n, k));