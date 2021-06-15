function solution(n) {
    let answer = 0;
    let strArr = (n).toString().split('');
    const sortedNumArr = strArr.map((v) => Number(v)).sort((a, b) => b-a).join('');
    answer+=parseInt(sortedNumArr);
    return answer;
}