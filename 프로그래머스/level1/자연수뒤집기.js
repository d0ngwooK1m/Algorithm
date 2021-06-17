function solution(n) {
    let answer = n.toString().split('').reverse().map((v) => parseInt(v));
    return answer;
}