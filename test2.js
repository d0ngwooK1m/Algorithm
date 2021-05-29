const priorities = [2, 1, 3, 2];
const location = 2;

function solution(priorities, location) {
    let answer = 0;
    const length = priorities.length
    let locVal = location;
    let stack = [];
    while (priorities.length !== 0) {
        let max = Math.max(...priorities);
        if (priorities[0] !== max) {
            priorities.push(priorities.shift());
            if (locVal === 0) locVal = length-1;
            else locVal-=1;
        } else {
            stack.push(priorities.shift());
            locVal-=1;
            if(locVal === -1) break;
        }
        // console.log(stack, priorities, locVal);
    }
    // console.log(stack)
    answer+=stack.length;
    return answer;
}