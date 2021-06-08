let input = `14
push 1
push 2
top
size
empty
pop
pop
pop
size
empty
pop
push 3
empty
top`.split('\n');

let answer = '';
let stack=[];
let count=0;

for(let i=1; i<input.length; i++){
    let call = input[i].split(' ');
    if(call[0] === 'push'){
        stack.push(Number(call[1]));
        count++;
    }
    else if(call[0] === 'pop'){
        if(stack.length === 0) answer+=`-1\n`;
        else answer+=`${stack.pop()}\n`;
        if(count > 0) count--;
    } 
    else if(call[0] === 'size'){
        answer+=`${stack.length}\n`;
    } 
    else if(call[0] === 'empty') {
        if(stack.length === 0) answer+=`1\n`;
        else answer+=`0\n`;
    }
    else if(call[0] === 'top'){
        if(stack.length === 0) answer+=`-1\n`;
        else answer+=`${stack[count-1]}\n`;
    }
}

console.log(answer);
//10828번

