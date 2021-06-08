const p = [2, 1, 3, 2];
const l = 2;

function solution(priorities, location) {
    let answer = 0;
    let locVal = location;
    let stack = [];
    while (locVal !== -1) {
        let max = Math.max(...priorities);
        // let min = Math.min(...priorities);
        let length = priorities.length;
        if (priorities[0] !== max) {
            priorities.push(priorities.shift());
            if (locVal === 0) locVal = length-1;
            else locVal-=1;
        } else {
            stack.push(priorities.shift());
            locVal-=1;
        }
        // console.log(stack, priorities, locVal);
    }
    // console.log(stack, priorities);
    answer+=stack.length;
    return answer;
}

console.log(solution(p, l));