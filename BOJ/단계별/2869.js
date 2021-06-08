let input = `100 99 1000000000`.split(' ').map(x => Number(x));
let a = input[0];
let b = input[1];
let v = input[2];

function climb(a, b, v){
    let x = Math.ceil((v-b)/(a-b));
    return x;    
}

console.log(climb(a, b, v));