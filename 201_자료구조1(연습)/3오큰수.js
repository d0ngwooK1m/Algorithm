let input = `4
9 5 4 8`.split('\n');
let length = Number(input[0]);
let numbers = input[1].split(' ').map(x => Number(x));
let queue = [];
let answer = [];

for(let i=0; i<length; i++){
    queue.push(numbers.shift());
    for(let j=0; j<numbers.length; j++){
        if(queue[i] < numbers[j]){
            answer.push(numbers[j]);
            break;   
        }
        else if(queue[i] >= numbers[j]){
            continue;
        }
        else if(j === numbers.length-1 && queue.length-1 === i) answer+=`-1 `;

    }

    console.log(answer);

}
// answer+='-1'
// console.log(answer);