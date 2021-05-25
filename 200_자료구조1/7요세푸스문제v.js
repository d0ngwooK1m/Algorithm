let input = `7 3`.split(' ');

let length = Number(input[0]);
let num = Number(input[1]);
let queue = Array(length).fill(0).map((_,x) => x+1);
let answer = [];
let count = 0;

while(queue.length){
    if(queue.length !== 1){
        queue.push(queue.shift());
        count++;
    } else {
        answer.push(queue.shift());
    }
    if(count === num-1){
       answer.push(queue.shift());
       count=0;
    }
}

console.log(`<${answer.join(', ')}>`);
//1158번