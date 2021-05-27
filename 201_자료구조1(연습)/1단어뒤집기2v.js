let input = `<ab cd>ef gh<ij kl>`.split('');
let length = input.length;
let answer = '';
let stack = [];
let tag = false;
let count = 0;

let reverse = function(){
    while(stack.length !== 0){
    answer+=`${stack.pop()}`;
    }
    
}


for(let i=0; i<length; i++) {
    if (input[i] === '<') {
        reverse();
        tag = true;
        answer+=`${input[i]}`;
    } else if (input[i] === '>') {
        tag = false;
        answer+=`${input[i]}`;
    } else if (tag) {
        answer+=`${input[i]}`;
    } else {
        if(input[i] === ' ') {
            reverse();
            answer+=`${input[i]}`;
        } else {
            stack.push(input[i]);
        }
    }
}
reverse();

console.log(answer);