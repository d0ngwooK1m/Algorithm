function solution(n, lost, reserve) {
    let answer = 0;
    let arr = Array(n+1).fill(0);
    
    for (let i=1; i<=n; i++) {
        for (let x of lost) {
            if (i === x && arr[i] === 0) arr[i] = false;
        }
        for (let y of reserve) {
            if (i === y && arr[i] === 0) arr[i] = true;
            else if (i === y && arr[i] === false) arr[i] = 0;
        }
    }
    
    for (let j=1; j<=n; j++) {
        if (arr[j-1] === false && arr[j] === true) {
            arr[j-1] = 0;
            arr[j] = 0;
        } else  if (arr[j] === true && arr[j+1] === false) {
            arr[j] = 0;
            arr[j+1] = 0;
        }
    }

    for (let k=1; k<=n; k++) {
        if(arr[k] === true) answer++;
        else if(arr[k] === 0) answer++;
    }
    return answer;
}