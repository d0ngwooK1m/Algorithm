let input = `0 6 6
25 52 60
5 12 13
0 0 0`.split('\n');

for(let i=0; i<input.length-1; i++){
    let triangle = input[i].split(' ').map(function(x){
        return Number(x);
    }).sort(function(a, b){
        return a-b;
    });
    if(triangle[0] === 0 || triangle[1] === 0 || triangle[2] === 0){
        console.log('wrong');
    } else if(Math.pow(triangle[2], 2) === Math.pow(triangle[0], 2) + Math.pow(triangle[1], 2)){
        console.log('right');
    } else {
        console.log('wrong');
    }
}