function solution(arr) {
    let answer = [];
    let before = -1;
    
    for (let i=0; i<arr.length; i++) {
        if (arr[i] === before) {
            before = arr[i];
            continue;  
        } else {
            answer.push(arr[i]);
            before = arr[i];
        }
    }
    
    return answer;
}