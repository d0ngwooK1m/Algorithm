let input = `8
4
3
6
8
7
5
2
1`.split('\n').map(x => Number(x));

let length = input[0];
let pairs = input.slice(1);
let stack = [];
let ansArr = [];
let answer = '';

for(let i=1; i<=length; i++) {
    ansArr.push('+');
    stack.push(i);
    while(stack.length > 0 && stack[stack.length-1] === pairs[0]){
        pairs.shift();
        stack.pop();
        ansArr.push('-');
    }
}

stack.length === 0 ? ansArr.forEach(a => answer+=`${a}\n`) : answer+=`NO\n`;
console.log(answer);
//1874번