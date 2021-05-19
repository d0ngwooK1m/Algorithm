let input = `5
5 50 50 70 80 100
7 100 95 90 80 70 60 50
3 70 90 80
3 70 90 81
9 100 99 98 97 96 95 94 93 91`.split('\n');

let sum = 0;
let count = 0;
let answer = '';

for(let i=1; i<input.length; i++){
    let test = input[i].split(' ').map(x => Number(x));
    for(let j=1; j<test.length; j++){
        sum+=test[j];
    }
    let avg = sum/(test[0]);
    for(let k=0; k<test.length; k++){
        if(test[k] > avg){
            count++;
        }
    }
    let average = count/test[0]*100;
    answer+= `${average.toFixed(3)}`+'%'+'\n';
    count = 0; 
    sum = 0;
}

console.log(answer);