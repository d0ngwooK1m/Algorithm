function solution(n) {
  let answer = 0;
  let binaryNum = n.toString(2);
  //2진수 String으로!!!
  let count = 0;
  for(let i=0; i<binaryNum.length; i++) {
      if(binaryNum[i] === '1') {
          count++;
      }
  }
  
  while(true) {
    //무조건 while문 실행!!!
      n = n+1;
      binaryNum = n.toString(2);
      let answerCnt = 0;
      for(let j=0; j<binaryNum.length; j++) {
          if(binaryNum[j] === '1') {
              answerCnt++;
          }
      }
      if(answerCnt === count) {
          answer = n;
          break;
      }
  }
  return answer;
}