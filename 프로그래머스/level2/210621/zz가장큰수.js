function solution(numbers) {
    let answer = numbers.map((v) => v.toString()).sort((a, b) => (b+a) - (a+b)).join('');
    //정렬 (b+a) - (a+b) ex) 3, 30 303 - 330 = 음수 a와 b 뒤집기
    return answer.replace(/^0+/, "0");
    //정규표현식 0으로 시작되는 문자열 ^와 ^[] 차이점 알아둘것
}