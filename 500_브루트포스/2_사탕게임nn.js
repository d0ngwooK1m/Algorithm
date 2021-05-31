let input = `5
YCPZY
CYZZP
CCPPP
YCYZC
CPPZZ`.split('\n');

//체크 함수
let check = function (a) {
    let n = a.length;
    let ans = 1;
    for (let i=0; i<n; i++) {
        let cnt = 1;
        for (let j=1; j<n; j++) {
            if (a[i][j] === a[i][j-1]) {
                cnt += 1;
            } else {
                cnt = 1;
            }
            if (ans < cnt) ans = cnt;
        }
        cnt = 1;
        for (let j=1; j<n; j++) {
            if (a[j][i] === a[j-1][i]) {
                cnt += 1;
            } else {
                cnt =1;
            }
            if(ans < cnt) ans = cnt;
        }
    }
    return ans;
}

let n = Number(input[0]);
let a = []; 
for(let k=1; k<input.length; k++) {
    a.push(input[k].split(''));
}
let ans = 0;
for (let i=0; i<n; i++) {
    for(let j=0; j<n; j++) {
        if (j+1 < n) {
            a[i][j],a[i][j+1] = a[i][j+1],a[i][j];
            let temp = check(a);
            if (ans < temp) {
                ans = temp;
            }
            a[i][j],a[i][j+1] = a[i][j+1],a[i][j];

            if (i+1 < n) {
                a[i][j],a[i+1][j] = a[i+1][j],a[i][j];
                let temp = check(a);
                if (ans < temp) {
                    ans = temp;
                }
                a[i][j],a[i+1][j] = a[i+1][j],a[i][j];
            }
        }
    }
}

console.log(ans);