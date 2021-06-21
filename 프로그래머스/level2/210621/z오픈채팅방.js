function solution(record) {
    let answer = []; 
    const map = {}; 
    for (let i = 0; i < record.length; ++i) {
        const [state, uid, name] = record[i].split(' ');
        //[state, uid, name] = ["Enter uid1234 Muzi"].split(' ') 
        if (state === 'Leave') {
            answer.push([uid, '님이 나갔습니다.']); 
            continue; 
            //밑에 map 건너뛰기위함
        } 
        if (state === 'Enter') {
             answer.push([uid, '님이 들어왔습니다.']); 
        } 
        map[uid] = name;    
    } 
    
    return answer.map(ele => map[ele[0]] + ele[1]); 
}