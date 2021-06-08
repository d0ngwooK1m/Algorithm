let input = `22
front
back
pop_front
pop_back
push_front 1
front
pop_back
push_back 2
back
pop_front
push_front 10
push_front 333
front
back
pop_back
pop_back
push_back 20
push_back 1234
front
back
pop_back
pop_back`.split('\n');

let length = Number(input[0]);
let dequeue = [];
let answer = '';

for(let i=0; i<=length; i++){
    let command = input[i].split(' ');
    if(command[0] === 'push_front'){
        dequeue.unshift(Number(command[1]));
    }
    else if(command[0] === 'push_back'){
        dequeue.push(Number(command[1]));
    }
    else if(command[0] === 'pop_front'){
        if(dequeue.length !== 0) answer+=`${dequeue.shift()}\n`;
        else answer+=`-1\n`;
    }
    else if(command[0] === 'pop_back'){
        if(dequeue.length !== 0) answer+=`${dequeue.pop()}\n`;
        else answer+=`-1\n`;
    }
    else if(command[0] === 'size'){
        answer+=`${dequeue.length}\n`;
    }
    else if(command[0] === 'empty'){
        if(dequeue.length !== 0) answer+=`0\n`;
        else answer+=`1\n`;
    }
    else if(command[0] === 'front'){
        if(dequeue.length !== 0) answer+=`${dequeue[0]}\n`;
        else answer+=`-1\n`;
    }
    else if(command[0] === 'back'){
        if(dequeue.length !== 0) answer+=`${dequeue[dequeue.length-1]}\n`;
        else answer+=`-1\n`;
    }
}

console.log(answer);
