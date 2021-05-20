let input = `11
10987654321`.split('\n');
let inputNew = input[1].split('').map(x => Number(x));
let sum=0;

for(let i=0; i<inputNew.length; i++){
    sum+=inputNew[i];
}

console.log(sum);
