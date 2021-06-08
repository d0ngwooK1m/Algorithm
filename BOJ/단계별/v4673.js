function d(n){
    let answer;
    let sum = 0;
    let nNew = n.toString().split('').map(x => Number(x));
    for(let i=0; i<nNew.length; i++){
        sum+=nNew[i];
    }
    answer = n+sum;
    console.log(answer);
}

function filter(m){
    let arr=[];
    for(let j=1; j<=m; j++){
        arr.push(j);
    }
    
    for(let k=0; k<m; k++){
        if(d(arr[k]) < m){
            d(d(arr[k]));
            arr.slice(d(arr[k]), 1);
        }
    }
    console.log(arr);
}

filter(100);

