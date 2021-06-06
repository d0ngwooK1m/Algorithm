const input = `4 6
a t c i s w`.split('\n');

const n = Number(input[0][0]);
const m = Number(input[0][2]);
let a = input[1].split(' ').sort();

const check = function (password) {
    let ja = 0;
    let mo = 0;
    for (let x of password) {
        if (x === 'a' || x === 'e' || x === 'i' || x === 'o' || x === 'u') {
            mo += 1;
        } else {
            ja += 1;
        }
    }
    return ja >= 2 && mo >= 1;
} 

const go = function (n, alpha, password, i) {
    if (password.length === n) {
        if (check(password)) {
            console.log(password);
        }
        return;
    }

    if (i === alpha.length) return;

    go(n, alpha, password+alpha[i], i+1);
    go(n, alpha, password, i+1); 
}
go(n, a, "", 0);
