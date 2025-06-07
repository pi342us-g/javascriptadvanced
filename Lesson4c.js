// JS Functions
// a function is a block of code  that performs a given task

// 1. Functions without parameters
// structure of a function:
// funtion key word followed by the name of the function, the statements to be printed out

function greetings(){
    console.log("Hello there? how have you been?")
}
// calling the function
greetings()

// functions with parameters
// parameters are additiional values that require to be passed as 
// argument when calling the function

function greating(name){
    console.log(`hello ${name}. How have you been`)
};
greating("Bernard")
greating("Mike")

// functions with multiple parameters

function sum (num1,num2,num3){
    let total = num1+num2+num3;
    console.log("The total is : "+ total)
};
sum(23,45,67)

// create a function to multiply four numbers
function products(a,b,c,d){
    let multiplication = a*b*c*d;
    console.log("The product is: " + multiplication)
}
products(87,34,21,76)

// Destructuring in functions
function studentInfo({name,subject,cat1,cat2}){
    const total = cat1+cat2;
    console.log(`${name} scored ${total} marks in ${subject}`)
}

studentInfo({
    name:"Pius",
    subject: "Mathematics",
    cat1: 68,
    cat2: 78
});