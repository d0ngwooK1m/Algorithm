let input = `24 18`.split(' ');

let num1 = Number(input[0]);
let num2 = Number(input[1]);
let answer = '';

let gcd = function(a, b){
    if(b === 0) {
        return a;
    } else {
        return gcd(b, a%b);
    }
}

let lcm = function(a, b){
    return a*b/gcd(a, b);
}

answer+=`${gcd(num1, num2)}\n${lcm(num1, num2)}`;
console.log(answer);
//2609번