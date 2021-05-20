let input = `UNUCIC`.split('');

answer = 0;

for(let i=0; i<input.length; i++){
    switch(true){
        case(input[i].charCodeAt(0)>=65 && input[i].charCodeAt(0)<=67):
            answer+=3;
            break;
        case(input[i].charCodeAt(0)>=68 && input[i].charCodeAt(0)<=70):
            answer+=4;
            break;
        case(input[i].charCodeAt(0)>=71 && input[i].charCodeAt(0)<=73):
            answer+=5;
            break;
        case(input[i].charCodeAt(0)>=74 && input[i].charCodeAt(0)<=76):
            answer+=6;
            break;
        case(input[i].charCodeAt(0)>=77 && input[i].charCodeAt(0)<=79):
            answer+=7;
            break;
        case(input[i].charCodeAt(0)>=80 && input[i].charCodeAt(0)<=83):
            answer+=8;
            break;
        case(input[i].charCodeAt(0)>=84 && input[i].charCodeAt(0)<=86):
            answer+=9;
            break;
        case(input[i].charCodeAt(0)>=87 && input[i].charCodeAt(0)<=90):
            answer+=10;
            break;
    }
}

console.log(answer);

//2차 배열 사용해서 풀어보기