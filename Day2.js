console.log("Good Evening !");

//Activity:01.Arithmetic Operators

var num1=25;
var num2=15;

// console.log(num1+num2);
// console.log(num1-num2);
// console.log(num1*num2);
// console.log(num1/num2);
// console.log(num1%num2);

//Activity:02.Assignment Operators.

var  result = 10 ;
var  result1 = 20 ;

    result += num1;
    result1 -= num2;

console.log(result);
console.log(result1);

//Activity:03.Comparison Operators.

var num1=25;
var str1='Shubham';
var num3=15;
var str2='Andman Nicobar';

// console.log(num1 > num2);
// console.log(num1 < num2);
// console.log(num1 >= num2);
// console.log(num1 <= num2);

// console.log(num2 <= num3);
// console.log(num2 >= num3);
//

//Activity:04.Logical Operators.

console.log(str1===str2 && num2 === num3);
console.log(str1===str2 &&! num2 == num3);

console.log(str1===str2 || num2 == num3);
console.log(!(str1===num2 || num2 == num3));

console.log(!(num1 >= num2 && num2 <= num3));

//Activity:05.Ternary Operators.

const num=10;

const compare = num >= 0 ? "Positive Number" : "Negative Number";

console.log(compare);