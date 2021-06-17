function solution(n) {
    let answer = 0;
    let queue = [];
    let arr = Array(n).fill(0).map((v, idx) => v+idx+1).reverse();
    for (let i=1; i<arr.length; i++) {
        queue.push(arr[i]);
        if (queue.reduce((a, b) => a+b, 0) === n) {
            queue.shift();
            answer++;
        }
        else if (queue.reduce((a, b) => a+b, 0) > n) {
            queue.shift();
        }
    }
    answer++
    return answer;
}