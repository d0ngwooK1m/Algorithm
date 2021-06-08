let input = `2100000000 9 10`.split(' ').map(x => Number(x));
let a = input[0];
let b = input[1];
let c = input[2];

function BEP(a, b, c){
    let x;
    if(c-b > 0) x = Math.floor(a/(c-b))+1;
    else x = -1;
    return x;
}

console.log(BEP(a, b, c));