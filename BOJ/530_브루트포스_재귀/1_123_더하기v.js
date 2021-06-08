const input = `3
4
7
10`.split('\n').map((x) => Number(x));
let t = input[0];

const go = function (s, goal) {
    if (s > goal) return 0;
    if (s === goal) return 1;

    let now = 0;
    for (let i=1; i<=3; i++) {
        now += go(s+i, goal);
    }
    return now;
}

for (let i=1; i<=t; i++) {
    let n = input[i];
    console.log(go(0, n));
}