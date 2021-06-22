function solution(citations) {
    let cArr = citations.sort((a, b) => b - a);
    let i = 0;
    while(i+1 <= cArr[i]) {
        i++;
    }
    return i;
}