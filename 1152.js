let input = ` Teullinika Teullyeotzi `.split(' ');

let count = 0;
let answer;

for(let i=0; i<input.length; i++){
    if(input[i] === ''){
       count+=0; 
    }else{
        count++;
    }
}
answer = count;
count=0;
console.log(answer);