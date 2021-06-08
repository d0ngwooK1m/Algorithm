const input = `4
0 1 2 3
4 0 5 6
7 1 0 2
3 4 5 0`.split('\n');

const n = Number(input[0]);
let s = [];
for (let i=1; i<=n; i++) {
    let e = input[i].split(' ').map((x) => Number(x));
    s.push(e);
}

const go = function(index, first, second) {
    if (index === n) {
        if (first.length !== Math.floor(n/2)) return -1;
        if (second.length !== Math.floor(n/2)) return -1;

        let t1 = 0;
        let t2 = 0;

        for (let i=0; i<n/2; i++) {
            for (let j=0; j<n/2; j++) {
                if (i === j) continue;
                t1 += s[first[i]][first[j]];
                t2 += s[second[i]][second[j]];
            }
        }
        const diff = Math.abs(t1-t2);
        return diff;
    }
   let ans = -1;
   t1 = go(index+1, first+[index], second);
}