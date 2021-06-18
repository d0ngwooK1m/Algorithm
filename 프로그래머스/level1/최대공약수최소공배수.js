function solution(n, m) {
    let answer = [];
    let min = Math.min(n, m);
    const gcd = (n, m) => {
        if (min === 1) return;
        if (n%min === 0 && m%min === 0) return;
        min--;
        gcd(n, m);
    }
    gcd(n, m);
    answer.push(min);
    answer.push(min*(n/min)*(m/min));
    return answer;
}