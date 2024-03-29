#! /usr/bin/env node

//SHABANG

import inquirer from "inquirer";

const asnwer = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "firstNumber" },
  { message: "Enter second number", type: "number", name: "secondNumber" },
  {
    message: "Select one of the operators to hassan calculator to perform operation",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

//conditional statement
 if (asnwer.operator === "Addition") {
    console.log(asnwer.firstNumber + asnwer.secondNumber);
}
 else if (asnwer.operator === "Subtraction") {
    console.log(asnwer.firstNumber - asnwer.secondNumber);
}
 else if (asnwer.operator === "Multiplication") {
    console.log(asnwer.firstNumber * asnwer.secondNumber);
}
 else if (asnwer.operator === "Division") {
    console.log(asnwer.firstNumber / asnwer.secondNumber);
}
else{
    console.log("Please select correct operator");
    
}