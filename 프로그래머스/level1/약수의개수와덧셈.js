function solution(left, right) {
    let answer = 0;
    const check = (num) => {
        let cnt = 0
        for (let i=1; i<=num; i++) {
            if (num % i === 0) cnt ++;
        }
        return cnt;
    }
    
    for (let i=left; i<=right; i++) {
        if (check(i) % 2 === 0) answer+=i;
        else answer-=i;
    }
    
    return answer;
}