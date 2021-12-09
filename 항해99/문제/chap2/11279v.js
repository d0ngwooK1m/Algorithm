const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString()
  : `8
100
50
75
1
2
51
0
0`
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
      const parentIdx = Math.floor(currentIdx / 2) ;
      if (heap[parentIdx] < heap[currentIdx]) {
        let temp = heap[parentIdx];
        heap[parentIdx] = heap[currentIdx];
        heap[currentIdx] = temp;
        currentIdx = parentIdx;
      } else {
        break;
      }
    }
    // console.log(heap);
    return;
  }

  const erase = () => {
    let temp = heap[1];
    heap[1] = heap[heap.length - 1];
    heap[heap.length - 1] = temp;
    const prevMax = heap.pop();
    let currentIdx = 1;

    while (currentIdx <= heap.length - 1) {
      const leftChildIdx = currentIdx * 2;
      const rightChildIdx = currentIdx * 2 + 1;
      let maxIdx = currentIdx;
      // console.log(maxIdx, currentIdx)
      if (leftChildIdx <= heap.length - 1 && heap[leftChildIdx] > heap[maxIdx]) {
        maxIdx = leftChildIdx
      }
      if (rightChildIdx <= heap.length - 1 && heap[rightChildIdx] > heap[maxIdx]) {
        maxIdx = rightChildIdx;
      }
      if (maxIdx === currentIdx) {
        break;
      }
      let temp2 = heap[currentIdx];
      heap[currentIdx] = heap[maxIdx];
      heap[maxIdx] = temp2;
      currentIdx = maxIdx;
      // console.log(heap);
    }
    // console.log(heap);
    if (prevMax === undefined) {
      // console.log(0);
      answerString += '0\n';
    } else {
      // console.log(prevMax);
      answerString += `${prevMax}\n`;
    }
    return;
  }

  const answer = () => {
    if (number !== 0) {
      insert(number);
    } else {
      erase(number);
    }
  };
  answer();
};

console.log(answerString);
