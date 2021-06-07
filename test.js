const input = `4
-+0++++--+ `.split('\n');

const check = function (index) {
    let s = 0;
    for (let i=index; i>=0; i--) {
        sum += ans[i];
        if (sign[i][index] === 0) {
            if (sum !== 0) return false;
        } else if (sign[i][index] < 0) {
            if (sum >= 0) return false;
        } else if (sign[i][index] > 0) {
            if (sum <= 0) return false;
        }
    }
    return true;
}

const go = function (index) {
    if (index === n) return true;
    if (sign[index][index] === 0) {
        ans[index] = 0;
        return check(index) && go(index+1);
    }

    for (let i=0; )
}