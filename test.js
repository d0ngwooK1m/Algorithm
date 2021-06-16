const n = [2,1,3,4,1];
function solution(numbers) {
    let answer = [];
    let check = Array(201).fill(false);

    for (let i=0; i<numbers.length; i++) {
        for (let j=0; j<numbers.length; i++) {
            if (i !== j && check[numbers[i] + numbers[j]] === false) {
                answer.push(numbers[i] + numbers[j]);
                check[numbers[i] + numbers[j]] = true;
            } 
            else continue;
        }
    }
    console.log(answer);
    // [...new Set(answer)].sort((a, b) => a-b);
    return answer;
}

console.log(solution(n));