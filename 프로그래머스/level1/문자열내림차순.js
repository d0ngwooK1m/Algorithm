function solution(s) {
    var answer = '';
    let codes = s.split('').map((v, idx) => s.charCodeAt(idx)).sort((a, b) => b-a);
    answer+=codes.map((v) => String.fromCharCode(v)).join('');
    return answer;
}