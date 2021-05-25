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
    let parentheses = input[i].split('');
    let check = true;
    let stack = [];
    for(let j=0; j<parentheses.length; j++){
        if(parentheses[j] === '(') stack.push(parentheses[j]);
        else if(parentheses[j] === ')' ){
            if(stack.length !== 0) stack.pop();
            else if(stack.length === 0) {
                answer+=`NO\n`;
                check=false;
            }
        }
    }
    if(stack.length === 0 && check === true) answer+=`YES\n`;
    else if(stack.length !== 0) answer+=`NO\n`;     
    check=true;
}
 



// let parentheses = input[5].split('')
// for(let j=0; j<parentheses.length; j++){
//     if(parentheses[j] === '(') stack.push(parentheses[j]);
//     else if(parentheses[j] === ')' ){
//         if(stack.length !== 0) stack.pop();
//         else if(stack.length === 0) {
//             answer+=`NO\n`;
//             check=false;
//         }
//     }
//     console.log(stack);
//     console.log(check);
// }
// if(stack.length === 0 && check === true) answer+=`YES\n`;
// else if(stack.length !== 0) answer+=`NO\n`;     
// check=true;

console.log(answer);