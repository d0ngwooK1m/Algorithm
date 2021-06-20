function solution(land) {
    var answer = 0;
    let before = 0;

    for(let i=0 ; i<land.length-1 ; i++){
        land[i+1] = max(land[i],land[i+1]);
    }
    answer = Math.max(...land[land.length-1])
    return answer;
}

function max(arr1,arr2){
    let stack = [];
    let newArr = [0,0,0,0];
    for(let i=0 ; i<arr2.length ; i++){
        for(let j=0 ; j<arr1.length ; j++){
            if(j === i) continue;
            stack.push(arr1[j]+arr2[i])
        }
        newArr[i] = Math.max(...stack);
        stack = [];
    }
    return newArr;
}