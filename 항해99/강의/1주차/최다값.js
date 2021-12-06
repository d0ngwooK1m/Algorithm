const string = "hello my name is sparta";
string

const answer = () => {
  let maxNum = 0;
  for (let i = 0; i < string.length; i++) {
    let count = 0;
    for (let j = 0; j < string.length; j++) {
      console.log(string[i], string[j]);
      if (string[i] === string[j] && string[i] !== ' ') {
        count++;
      }
    }
    if (count >= maxNum) {
      maxNum = count;
    }
  }
  return console.log(maxNum);
};
answer();