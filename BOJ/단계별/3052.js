let input = `39
40
41
42
43
44
82
83
84
85`.split('\n').map(x => Number(x));

let remainderCnt = Array(42).fill(0).map(x => Number(x));
let count = 0;
for(let i=0; i<input.length; i++){
    remainderCnt[input[i]%42]++;
}

for(let j=0; j<remainderCnt.length; j++){
    if(remainderCnt[j] !== 0) count++;
}

console.log(count);
//다른 풀이방법도 확인 forEach, indexOf사용