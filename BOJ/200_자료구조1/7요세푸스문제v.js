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

/*
let arrLength = Number(input[0]);
let step = Number(input[1])-1;
let queue = Array(arrLength).fill().map((_, x) => x+1);
let answerStr = '<';
let count = 0;

while(answer.length !== arrLength){
    queue.push(queue.shift());
    count++;
    if(count === step && queue.length !== 1){
        answerStr+= `${queue.shift()}, `
        count = 0;
    } else if(count === step && queue.length === 1){
        answerStr+= `${queue.shift()}>`;
        break;        
    }
}

console.log(answerStr);
*/