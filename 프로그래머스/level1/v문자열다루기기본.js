function solution(s) {
    if ((s.length === 4 || s.length === 6) && /^[0-9]+$/.test(s)) return true;
    //한개 이상의 조건이 나올 때 필요에 따라 괄호 묶어주는 것 중요!!
    // 정규표현식 중요!!
    else return false
}