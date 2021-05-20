let input = `110`.split(' ');
let inputNum = input.map(x => Number(x));

function check(inputNum){  
    for(let i=1; i<=inputNum; i++){
        let separate = i.toString().split('').map(y => Number(y));
        for(let j=0; j<separate.length; j++){
            let before = 0;
            let minus = separate[j]-before;
            
        }
    }
}
console.log(input);