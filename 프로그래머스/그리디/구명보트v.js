//pop과 push를 사용하면 효율성 검사 통과 안됨, 인덱스를 조작해서 계산하는 방향으로...
const p = [70, 80, 50];
const l = 100;

function solution(people, limit) {
    let answer = 0;
    let newP = people.sort((a, b) => b-a);
    let first = 0;
    let last = newP.length-1;
    while (first <= last) {
        if (newP[first] <= limit/2) {
            answer+=Math.ceil((last+1-first)/2);
            break;
        }
        answer++;
        switch (newP[first] + newP[last] <= limit) {
            case true :
                first++;
                last--;
                break;
            case false :
                first++;
                break;
        }
        console.log(answer);
    }
    return answer;
}

console.log(solution(p, l));