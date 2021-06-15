function solution(x) {
    let answer = true;
    const sum = (num) => { //각 자리수를 분리하여 더하는 과정
        let strArr = (num).toString().split(''); // 문자열로 변환하여 배열로 쪼개기
        return strArr.map((v) => Number(v)).reduce((a, b) => a+b, 0); //각 자리를 숫자로 변환하고 reduce로 합치기
    }
    if (x % sum(x) === 0) answer;
    else answer=false;
    return answer;
}