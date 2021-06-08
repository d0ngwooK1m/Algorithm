let input = `6
1 2 3 4 5 7`.split('\n');

let length = Number(input[0]);
let numbers = input[1].split(' ').map(x => Number(x));
let count = 0;

let isPrime = function(x) {
    if (x < 2) {
        return false;
    }
    for (let j=2; j*2<=x; j++){
        if (x % j === 0) {
            return false;
        }
    }
    return true;
}

for (let i=0; i<length; i++){
    let number = numbers[i];
    if(isPrime(number) === true) count++;
}

console.log(count);
//1978번 함수체크, 에라토스테네스 체는 함수화 해서 사용하면 편할 듯