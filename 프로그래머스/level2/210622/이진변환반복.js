function solution(s) {
    let answer;
    let times = 0;
    let zeros = 0;
    function binaryNum(num) {
        let ones = [];
        if(num === '1') return;
        times++;
        for(let i=0; i<num.length; i++) {
            if(num[i] === '0') zeros++;
            else ones.push(num[i]);
        }
        binaryNum(ones.join('').length.toString(2));
    }
    binaryNum(s)

    answer = [times, zeros]
    return answer;
}