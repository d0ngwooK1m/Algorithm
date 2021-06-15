function solution(s) {
    let answer = '';
    let cnt = 0;
    for (let i=0; i<s.length; i++) {
        if (s[i] === ' ') cnt = 0;
        else cnt++;
        
        if(cnt % 2 === 1) answer+=(s[i]).toUpperCase();
        else answer+=(s[i]).toLowerCase();
    }
    return answer;
}