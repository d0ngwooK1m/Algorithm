function solution(n)
{
    let answer = 0;
    answer += n.toString().split('').map((v) => parseInt(v)).reduce((a, b) => a+b, 0);
    return answer;
}