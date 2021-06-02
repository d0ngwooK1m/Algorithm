let input = `3
10 12 3 9
10 12 7 2
13 11 5 6`.split('\n');

let answer = '';
let dataNum = Number(input[0]);
for (let i=1; i<=dataNum; i++) {
    let testData = input[i].split(' ').map((x) => Number(x));
    const m = testData[0];
    const n = testData[1];
    let x = testData[2];
    let y = testData[3];

    x -= 1;
    y -= 1;

    let ok = false;

    for (let k=x; k<(n*m); k+=m) {
        if (k%n === y) {
            answer+=`${k+1}\n`;
            ok = true;
            break;
        }
    }
    if (!ok) {
        answer+=`-1\n`;
    }
}

console.log(answer);