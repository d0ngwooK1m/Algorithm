let input = `2
I am happy today
We want to win the first prize`.split('\n');


for(let i=1; i<input.length; i++){
    let sentence=input[i].split(' ');
    let sentenceRev=[];
    for(let j in sentence){
        let wordRev=sentence[j].split('').reverse().join('');
        sentenceRev.push(wordRev);
    }
    console.log(sentenceRev.join(' '));
}

//9093번 split reverse join 사용!