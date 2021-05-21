let input = `58`.split(' ').map(x => Number(x));

let count = 0;
let end = 1;
let cellNum;

while(input[0] > end){
    count++;
    cellNum = count * 6;
    end = end + cellNum;
}

console.log(count+1);