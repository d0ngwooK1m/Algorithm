function solution(answers) {
    let answer = [];
    let check = [];
    let ans1 = [1, 2, 3, 4, 5];
    let cnt1 = 0;
    let ans2 = [2, 1, 2, 3, 2, 4, 2, 5];
    let cnt2 = 0;
    let ans3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let cnt3 = 0;
    
    for (let i=0; i<answers.length; i++) {
        if (answers[i] === ans1[i%5]) cnt1++;
        if (answers[i] === ans2[i%8]) cnt2++;
        if (answers[i] === ans3[i%10]) cnt3++;
    }
    check.push(cnt1, cnt2, cnt3);
    
    for (let j=0; j<check.length; j++) {
        let max = Math.max(...check);
        if (max === check[j]) answer.push(j+1);
    }
    
    
    return answer;
}