let input = `<problem>17413<is hardest>problem ever<end>`.split('');
let length = input.length;
let answer = '';
let stack = [];
let reverseCheck = false;
let count = 0;

for(let i=0; i<length; i++){
    console.log(stack);
    if(input[i] === '<'){
        reverseCheck = true;
        answer+=`${stack.reverse().join('')}`;
        answer+=`${input.shift()}`;
        stack=[];
    }
    else if(input[i] === '>'){
        reverseCheck = false;
        answer+=`${input.shift()}`;
    }

    // if(reverseCheck === true){
    //     answer+=`${input.shift()}`;
    // }
    // if(reverseCheck === false && input[i] !== ' '){
    //     stack.push(input.shift());
    // }
    // if(reverseCheck === false && input[i] === ' '){
    //     stack.push(input.shift());
    //     answer+=`${stack.reverse().join('')}`;
    //     stack=[];
    // }
    count++;
    console.log(input);
    
}

// answer+=`${input.shift()}`
// stack = input.shift();
// console.log(answer, stack, input);
// console.log(answer);