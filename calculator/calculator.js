/*
01.26.23
Artem Grishin
*/

const readline = require('readline-sync');
console.log(`Thank you for using our calculator!`);
// Ask the user for two numbers.
console.log(`Please enter the first number: `);
let num1 = Number(readline.question());

console.log(`Please enter the second number: `);
let num2 = Number(readline.question());

console.log(`num1:${num1} num2:${num2}`);

// Ask the user for the type of operation to perform: add, subtract, multiply or divide.
console.log('What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide');
let operation = Number(readline.question());


// Perform the calculation and display the result.
let output;

if(operation === 1) {
    output = num1 + num2; 
} else if(operation === 2) {
    output = num1 - num2;
} else if(operation === 3) {
    output = num1 * num2;
} else if(operation === 4) {
    output = num1 / num2;
}

console.log(`The result is ${output}`);