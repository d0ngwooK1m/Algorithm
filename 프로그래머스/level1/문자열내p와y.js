function solution(s){
    let answer = true;
    let strings = s.toLowerCase();
    let cntP = 0;
    let cntY = 0;
    
    for (let i=0; i<strings.length; i++) {
        if (strings[i] === 'p') cntP++;
        else if(strings[i] === 'y') cntY++;
    }
    
    if (cntP !== cntY) return false;
    
    

    return answer;
}