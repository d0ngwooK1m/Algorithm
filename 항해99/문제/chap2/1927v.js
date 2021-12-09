const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString()
  : `9
0
12345678
1
2
0
0
0
0
32`
).split('\n');
const heap = ['None'];

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();
let answerString = '';

let t = input();
while (t--) {
  const number = Number(input());

  const insert = (val) => {
    heap.push(val);
    let currentIdx = heap.length - 1;
    while (currentIdx > 1) {
      const parentIdx = Math.floor(currentIdx / 2);
      if (heap[parentIdx] > heap[currentIdx]) {
        let temp = heap[parentIdx];
        heap[parentIdx] = heap[currentIdx];
        heap[currentIdx] = temp;
        currentIdx = parentIdx;
      } else {
        break;
      }
    }
    return;
  };

  const erase = () => {
    let temp = heap[1];
    heap[1] = heap[heap.length - 1];
    heap[heap.length - 1] = temp;
    const prevMin = heap.pop();
    let currentIdx = 1;

    while (currentIdx <= heap.length - 1) {
      const leftChildIdx = currentIdx * 2;
      const rightChildIdx = currentIdx * 2 + 1;
      let minIdx = currentIdx;

      if (leftChildIdx <= heap.length - 1 && heap[leftChildIdx] < heap[minIdx]) {
        minIdx = leftChildIdx;
      }
      if (rightChildIdx <= heap.length - 1 && heap[rightChildIdx] < heap[minIdx]) {
        minIdx = rightChildIdx;
      }
      if (minIdx === currentIdx) {
        break;
      }
      temp = heap[currentIdx];
      heap[currentIdx] = heap[minIdx];
      heap[minIdx] = temp;
      currentIdx = minIdx;
    }

    if (prevMin === undefined) {
      answerString += '0\n';
    } else {
      answerString += `${prevMin}\n`;
    }
    return;
  }

  const answer = () => {
    if (number != 0) {
      insert(number);
    } else {
      erase(number);
    }
  }
  answer();
}

console.log(answerString);