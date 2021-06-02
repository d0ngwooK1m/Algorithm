let input = `17`;

function solution (numbers) {

    let num = [...numbers];
    
    const permutation = (arr, selectNum) => {
        let result = [];
        if (selectNum === 1) return arr.map((v) => [v]);
        //selectNum === 1 각 원소 배열로 리턴

        arr.forEach ((v, idx, arr) => {
            const fixer = v;
            const restArr = arr.filter((val, index) => index !== idx);
            //나머지Arr = index가 idx와 같지 않은 val, index 반환?
            const permuArr = permutation(restArr, selectNum-1);
            //permuArr = permutation(나머지Arr, selectNum-1)
            const combineFixer = permuArr.map((v) => fixer + v);
            //combineFixer = fixer에 v 더하기
            result.push(...combineFixer);
            //결과에 combineFixer 넣기
        })
        return result
    }
}

