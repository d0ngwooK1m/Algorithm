let n = "011";
function solution(numbers) {
    let answer = [];
    let num = [...numbers];
    function permutation(arr, selectNum) {
        let result = [];
        if (selectNum === 1) return arr.map((v) => [v]);
        
        arr.forEach((v, index, arr) => {
            const fixer = v;
            const restArr = arr.filter((v, idx) => idx !== index);
            const permuArr = permutation(restArr, selectNum-1);
            const combineFixer = restArr.map((v) => fixer + v);
            result.push(...combineFixer);
        })
        return result;
    }
    
    function checkP(num) {
        let cnt = 0;
        if (num === 1 || num === 0) return false;
        for (let i=1; 2*i<num; i++) {
            if (num%i === 0) cnt++;
            if (cnt > 2) return false;
        }
        return true;
    }
    
    // for (let i=1; i<=num.length; i++) {
    //     permutation(num, i).forEach((v) => {
    //         checkP(parseInt(v)) ? answer.push(parseInt(v)) : answer;
    //     })
    // }
    console.log(num.map((v) => [v]))
    permutation(num, 1)
    return answer;
}

console.log(solution(n));


