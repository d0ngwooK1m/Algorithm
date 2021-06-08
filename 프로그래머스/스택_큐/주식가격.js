const p = [1, 2, 3, 4, 5];

function solution (prices) {
    let answer = [];
    const n = prices.length;
    let cnt = 0;
    for (let index=0; index<n; ) {
        for (let i=index; i<n; i++) {
            if (prices[index]<=prices[i]) cnt++;     
        }
        // console.log(cnt);
        answer.push(cnt-1);
        cnt=0;
        index++;
        
    }
    return answer;
}

console.log(solution(p));