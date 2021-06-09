const p = [70, 50, 80, 50];
const l = 100;

function solution(people, limit) {
    let answer = 0;
    let newP = people.sort((a, b) => b-a)
    
    while (newP.length !== 0) {
        let n = newP.length;
        if (newP[0] + newP[n-1] <= limit) {
            newP.shift();
            newP.pop();
            answer++;
        } else {
            newP.shift();
            answer++;
        }
        console.log(newP, n);
    }
    return answer;
}

console.log(solution(p, l));