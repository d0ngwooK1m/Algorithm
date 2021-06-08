let input = `120`;

let number = Number(input);
let ans = 0;
let check = function (x) {
    let answer = 0;
    answer += x.toString().split('').length;
    return answer;
}

for (let i=1; i<=check(number); i++) {
    if (i < check(number)) {
        ans+= 9 * Math.pow(10, (i-1)) * i;
    }
    if (i === check(number)) {
        ans+= (number - Math.pow(10, (i-1)) + 1) * i;
    }
    // console.log(ans);
}
console.log(ans);


