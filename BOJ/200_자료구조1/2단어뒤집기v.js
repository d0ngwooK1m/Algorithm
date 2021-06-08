/*
let input = `2
I am happy today
We want to win the first prize`.split('\n');


for(let i=1; i<input.length; i++){
    let sentence=input[i].split(' ');
    let sentenceRev=[];
    for(let j in sentence){
        let wordRev=sentence[j].split('').reverse().join('');
        sentenceRev.push(wordRev);
    }
    console.log(sentenceRev.join(' '));
}

//9093번 split reverse join 사용!
*/
let input = `2
I am happy today
We want to win the first prize`.split('\n');

let length = Number(input[0]);
let sentence = input[1].split('');
let stack = [];
let answer = '';

for(let i=1; i<=length; i++){
    let sentence = input[i].split('');
    for(let j=0; j<sentence.length; j++){
        if(sentence[j] !== ' ') stack.push(sentence[j])
        else if(sentence[j] === ' '){
            while(stack.length>0){
                answer+=`${stack.pop()}`;
            }
            answer+=' ';
        } 
    }
    while(stack.length>0){
        answer+=`${stack.pop()}`;
    }
    answer+='\n';
    // console.log(stack);       
}

console.log(answer);
//stack만 사용;