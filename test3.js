let n = "011";

function solution(numbers) {

    let num = [...numbers]

    // 순열 통해 경우의 수 구하기
    const permutation = (arr, selectNum) =>{
        let result = [];
        if(selectNum === 1) return arr.map((v)=> [v]);

        arr.forEach((v,idx,arr)=>{
            const fixer = v;
            const restArr = arr.filter((val, index)=> index !== idx); //fixer를 제외한 배열
            const permuArr = permutation(restArr, selectNum-1); // restArr로 만든 순열
            const combineFixer = permuArr.map((v)=> fixer + v); //fixer와 순열의 결합
            result.push(...combineFixer); //result로 결과 push
            // console.log(result);
        })
        return result
    }

    // 소수 판별
    const checkPrime = (num)=>{
        let prime = []
        if(num <= 1 || num % 2 == 0) return false

        for(let i=2; i <= num; i++){
            if(prime[i] == false) continue
            for(let j= i+i; j <=num; j+=i){
                prime[j] = false
            }
        }
        return true
    }

    let answer = []

    for(let i = 1; i <= num.length; i++){
        permutation(num, i).forEach( v=>{
            checkPrime(parseInt(v)) ?  answer.push(parseInt(v)) : answer //여기서 걸러내기
        })
    }
    
    console.log([...new Set(answer)])
    return [...new Set(answer)].length

}

console.log(solution(n));