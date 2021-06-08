let input = `baaa`.toLowerCase().split('');
let bestChar;
let bestCnt = 0;
let char;
let cnt = 0;

for(let i=0; i<input.length; i++){
    char = input[i];
    for(let j=0; j<input.length; j++){
        if(char === input[j]) cnt++;
    }
    if(cnt === bestCnt && char !== bestChar){
        bestChar='?';
    } else if(cnt > bestCnt){
        bestChar = input[i];
        bestCnt = cnt;
    }
    cnt = 0;    
}


console.log(bestChar.toUpperCase());
//시간초과