const p = [95, 90, 99, 99, 80, 99];
const s = 	[1, 1, 1, 1, 1, 1];

function solution(progresses, speeds) {
    let answer = [];
    let rest = [];
    let before;
    const length = progresses.length;
    let count =0;
    for (let j=0; j<length; j++) {
        rest.push(Math.ceil((100 - progresses[j])/speeds[j]));
        if (rest.length === 1) {
            count++;
            before = rest[0];
        } else if (before >= rest[j]) {
            count++;
        } else if (before < rest[j]) {
            answer.push(count);
            before = rest[j];
            count=1;
        }
        // console.log(count);
    }
    answer.push(count);
    return answer;
}

console.log(solution(p, s));