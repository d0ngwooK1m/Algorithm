let input = `6
(())())
(((()())()
(()())((()))
((()()(()))(((())))()
()()()()(()()())()
(()((())()(`.split('\n');

let length = Number(input[0]);
let answer = '';

for(let i=1; i<=length; i++){
    let parentheses=input[i].split('');
    let stack=[];
    let check=0;
    for(let j=0; j<parentheses.length; j++){
        if(parentheses[j] === '(')stack.push(parentheses[j]);
        else if(parentheses[j] === ')' && stack.length !== 0) stack.splice(stack.length-1, 1);
        else if(parentheses[j] === ')' && stack.length === 0) {
            check=-1;
        }
    }
    if(stack.length === 0 && check === 0) answer+=`YES\n`;
    else if(stack.length !== 0 && check === 0) answer+=`NO\n`;
    else if(check === -1) answer+=`NO\n`;
}

console.log(answer);
//9012번