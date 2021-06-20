function solution(arr) {
  let answer = 0;
  let max = Math.max(...arr);
  let n = 1;
  for (let i=0; i<arr.length; ) {
      if ((max * n) % arr[i] !== 0) {
          n++;
          i=-1;            
      }
      i++;
  }
  answer+=max*n;
  return answer;
}