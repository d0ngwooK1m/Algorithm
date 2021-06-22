function solution(number, k) {
    let answer = [];
    let cnt = k;
    let numArr = number.split('').map((v)=>Number(v));
    for(let i=0; i<numArr.length; i++) {
        while(cnt>0 && answer[answer.length-1] < numArr[i]) {
            answer.pop();
            cnt--;
        }
        answer.push(numArr[i]);
    }
    answer.splice(number.length-k);
    return answer.join(''); 
}