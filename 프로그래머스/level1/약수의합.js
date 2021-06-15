function solution(n) {
    let answer = 0;
    const divisor = (number) => {
        if (number === 0) return;
        if (n % number === 0) answer+=number;
        divisor(number-1);
    }
    divisor(n);
    return answer;
}