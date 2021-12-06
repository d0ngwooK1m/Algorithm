const numbers = [0, 3, 5, 6, 1, 2, 4];

const answer = () => {
  let answer = 0
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 0 || numbers[i] === 1) {
      answer = answer + numbers[i];
    } else if (numbers[i] !== 0 && numbers[i] !== 1 && answer === 0) {
      answer = answer + numbers[i];
    } else {
      answer = answer * numbers[i];
    }
    console.log(answer);
  }
  return answer;
}

console.log(answer());