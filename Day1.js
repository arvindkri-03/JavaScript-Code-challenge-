//01. Declaring a variable using 'var' and assining a number into this.

var num =25;
console.log(num);

//02. Declaring a  variable using 'let' and assining a string into this.

let str= "Chai Aur Code"

console.log(str);

console.log(typeof(str));

//03. Declaration of  constant variables using 'const' keyword.

const num1=85
const str1='Tiger abhi jinda hai'
const bool1=true
const obj1=null
const myArray=[]

console.log(typeof(num1));
console.log(typeof(str1));
console.log(typeof(bool1));
console.log(typeof(obj1));
console.log(typeof(myArray));       // It returns objects b'coz in js arrays are considered as objects.

//04. Declaration of a variable using 'let' keyword and assinging value.

let studName="Akash Kumar"
console.log(studName);

let studName= "Akhilesh Kumar"  // Same variable name not allowed reassigning value 

// console.log(studName);          it generates error


const student='Alok Kumar'
console.log(student);

const student='Alok Kumar'    // Same variable name not using const keyword allowed reassigning value it generates error
console.log(student);