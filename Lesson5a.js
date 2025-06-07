// Arrow functions
// They were introduced in the current version of javascript
// they help us to come up with simplified structure of a function
//Example
const greetings = ()=>{
    console.log("Hello there ...")
}
greetings()

// create an arrow function that adds two numbers. call it summation

const summation=()=>{
    let num1 =34;
    let num2 = 23;
    const total = num1+num2;
    console.log("The total is :"+total)
}
summation()


// arrow function with parameters
const greeting= (name)=>{
    console.log(`Hello ${name}. How have you been? Good to see you...`)
};
greeting("Pius")
greeting("Jeff")

// an arrow function that finds the product of three numbers

const product =(w,x,y)=>{
    const total = w*x*y;
    console.log(`The product of the numbers is:  ${total.toFixed(2)}`)

}
product(34,65,45)