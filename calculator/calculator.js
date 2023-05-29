/*
01.26.23
Artem Grishin
*/

const readline = require('readline-sync');

let prompt = message => console.log(`=> ${message}`);
let invalidNumber = number =>  number.trimStart() === '' || Number.isNaN(Number(number));

prompt(`Thank you for using our calculator!`);
// Ask the user for two numbers.

// get number 1
prompt(`What's the first number?`);
let num1 = readline.question();
while (invalidNumber(num1)) {
  prompt(`Hmm... that doesn't look like a valid number.`);
  prompt(`Please re-enter a valid number.`);
  num1 = readline.question();
}


prompt(`What's the second number?`);
let num2 = readline.question();
while (invalidNumber(num2)) {
  prompt(`Hmm... that doesn't look like a valid number.`);
  prompt(`Please re-enter a valid number.`);
  num2 = readline.question();
}
console.log(`num1:${num1} num2:${num2}`);
// Ask the user for the type of operation to perform: add, subtract, multiply or divide.
prompt('What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide');
let operation = readline.question();
while (!['1', '2', '3', '4'].includes(operation)) {
  prompt(`Must choose 1, 2, 3, or 4`);
  operation = readline.question();
}


// Perform the calculation and display the result.
num1 = Number(num1);
num2 = Number(num2);
operation = Number(operation);
let output;
switch (operation) {
  case 1:
    output = num1 + num2;
    break;
  case 2:
    output = num1 - num2;
    break;
  case 3:
    output = num1 * num2;
    break;
  case 4:
    output = num1 / num2;
    break;
  default:
}
console.log(`The result is ${output}`);