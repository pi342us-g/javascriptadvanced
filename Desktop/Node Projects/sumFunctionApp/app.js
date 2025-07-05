// importing chalk and its dependency

const chalk = require("chalk")

function sum(){
    let num1 = 23;
    let num2 = 45;
    let num3 = 90;
    let answer = num1+num2+num3
    const total = (`Sum is :${answer}`)
    console.log(chalk.blue(total))
}
sum()

console.log("Hello to the world")