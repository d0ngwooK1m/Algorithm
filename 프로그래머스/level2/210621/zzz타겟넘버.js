let total = 0;

function DFS(numbers, target, sum, n) {
    if(n >= numbers.length) {
        if(sum === target) total++;
        return;
        //타겟과 일치하면 개수+1  함수종료
    }
    
    DFS(numbers, target, sum + numbers[n], n+1);
    DFS(numbers, target, sum - numbers[n], n+1);
}

function solution(numbers, target) {
    let answer = 0;
    
    DFS(numbers, target, numbers[0], 1);
    DFS(numbers, target, -numbers[0], 1);
    //+1 -1로 분기를 나누어 함수적용
    
    answer+=total;
    return answer;
}

