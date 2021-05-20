let input = `734 893`.split(' ');

function reverse(s){
	return s.split('').reverse().join('');
}

let num1= reverse(input[0]);
let num2 = reverse(input[1]);

function check(x, y){
	if(Number(x) >= Number(y)){
         return num1;  
    }else if(Number(x) < Number(y)){
        return num2;   
    } 	 
};

console.log(check(num1, num2));