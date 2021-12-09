const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString()
  : `([)]
(((()))
So when I die (the [first] I will see in (heaven) is a score list).
[ first in ] ( first out ).
Half Moon tonight (At least it is better than no Moon at all].
A rope may form )( a trail in a maze.
Help( I[m being held prisoner in a fortune cookie factory)].
([ (([( [ ] ) ( ) (( ))] )) ]).
 .
.`
).split('\n');
const input = stdin;
// const test = [];
// test.pop();
// console.log(test);

const answer = () => {
  for (let i = 0; i < input.length - 1; i++) {
    const sentence = input[i];
    // console.log(sentence);
    // if (sentence === ' ') {
    //   console.log('yes');
    //   break;
    // }
    const stack = [];
    let check = 'yes';
    for (let j = 0; j < sentence.length - 1; j++) {
      if (sentence[j] === '(' || sentence[j] === '[') {
        stack.push(sentence[j]);
      } else if ((sentence[j] === ')' || sentence[j] === ']') && stack.length !== 0) {
        if ((sentence[j] === ')' && stack[stack.length - 1] === '(') ||
          (sentence[j] === ']' && stack[stack.length - 1] === '[')) {
          stack.pop();
        } else {
          check = 'no';
          // break;
        }
      } else if ((sentence[j] === ')' || sentence[j] === ']') && stack.length === 0) {
        check = 'no';
        // break;
      }
      // console.log(stack);
    }
    if (stack.length !== 0) {
      console.log('no');
    } else {
      console.log(check);
    }
    // console.log(check);
  }
  return;
};
answer();