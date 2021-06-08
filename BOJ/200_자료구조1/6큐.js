let input = `15
push 1
push 2
front
back
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
front`.split('\n');

let length = Number(input[0]);
let queue = [];
let answer = '';

for(let i=1; i<=length; i++){
    let element = input[i].split(' ');
    if(element[0] === 'push'){
        queue.push(Number(element[1]));
    }else if(element[0] === 'pop'){
        if(queue.length>0) answer+=`${queue.shift()}\n`;
        else answer+=`-1\n`;
    }
    else if(element[0] === 'size'){
        answer+=`${queue.length}\n`;
    }
    else if(element[0] === 'empty'){
        if(queue.length>0) answer+=`0\n`;
        else answer+=`1\n`;
    }
    else if(element[0] === 'front'){
        if(queue.length>0) answer+=`${queue[0]}\n`;
        else answer+=`-1\n`;
    }
    else if(element[0] === 'back'){
        if(queue.length>0) answer+=`${queue[queue.length-1]}\n`;
        else answer+=`-1\n`;
    }
}


console.log(answer);
//10845번