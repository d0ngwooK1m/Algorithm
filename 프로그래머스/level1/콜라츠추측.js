function solution(num) {
    let answer = 0;
    const collatz = (n) => {
        if (n === 1) return; //n이 1이면 종료
        if (answer === 500) return; // answer이 500일때도 종료
        if (n % 2 === 0) {
            answer++;
            collatz(n/2); // 짝수, 홀수일 때 재귀함수
        } else {
            answer++;
            collatz(3*n + 1);
        }
    }
    collatz(num);
    if (answer === 500) return -1
    return answer;
}