function solution(n, t, m, p) {
  let answer = '';
  let everyNum = '';
  for(let i=0; i<=(t*m); i++) {
      const numbers = i.toString(n);
      everyNum+=numbers;
  }
  
  for(let j=p; j<=everyNum.length; ) {
      if (answer.length === t) break;
      answer+=everyNum[j-1];
      j+=m;
  }

  return answer.toUpperCase();
}