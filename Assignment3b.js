//let rawName = "   diana karanja  ";
// let rawEmail = "DianaKaranja@Email.com   ";
// let course = "Introduction to coding";
// let age1 = 17;
let rawName = "  diana karanja  ";
let rawEmail = "DianaKaranja@gmail.com  ";
let course = "Introduction to coding";
let newName = rawName.trim().charAt(0).toUpperCase();
let greetings = `Welcome, ${newName}!`
console.log(greetings)

let email = rawEmail.trim().toLowerCase();
console.log("Email: " + email);

let newCourse = course.toUpperCase();
console.log("Course: " + newCourse)

let emaillength = email.length;

console.log("Your email address has " + emaillength + " Characters")

// Assignment:
// Welcome, Diana Karanja!
// Email: dianakaranja@email.com
// Course: INTRODUCTION TO CODING
// Your email address has 25 characters.

// First name: Diana
// Updated course: Introduction to JavaScript
// Initials: D.K.
let student = {
    firstName:"Diana ",
    lastName:"Karanja",
    updatedCourse:"Introduction to Javascript"

}
let{firstName,updatedCourse,lastName}=student;
console.log(firstName);
console.log(updatedCourse);
console.log("Initials:",firstName.charAt(0),".",lastName.charAt(0),".")


//Assignment: create two object of a player a car

let player ={
    username:"Matineli",
    age:21,
    team:"Arsenal",
    country:"UK",
    nationality:"white"

}
console.log(player)

let car ={
    carname:"Landcruiser Prado",
    model:"2021",
    make:"Toyota",
    color:"Black",
    owner:"Pius Wanyangu"

}
console.log(car)

// Assignment
//Create an array of five numbers. use map to double them and filter to extract numbers greater than 5

let numbers = [4,1,19,20,36]
let newnumber = numbers.map(n =>(n*2)).filter(n=>n>5)
console.log(newnumber)
// Use map() method to convert an array of prices with 16% value added tax VAT  and show the final cost
let prices = [500,250,300,100]
let newprices = prices.map(p =>(p*16/100))
// tatal VAT
 

// find out how to replace multiple occurence
let text = "I will meet Pius and Mike tomorrow morning. We will be travelling with Pius and Mike to ukwala , Pius will be head of State";
text = text.replaceAll("Pius","Jeff");
text = text.replaceAll("Mike","Hellen");
console.log(text)

// Assignment create an object product with properties id name cost quantity and description. 
let shoe = {
    id:2,
    name:"Safari boots",
    cost: 3000,
    quantity: 45,
    description:"Leather brown in color"
}
//use destructuring to extract and log them out
let {name,cost,description}=shoe;
console.log(name);
console.log(cost)
console.log(description)




//Step1: create a list of 5 countries
let countries = ["USA","China","Kuwait","Kenya","Egypt"]
//step2 : use slice() to get a portion of the list
let slicedcountries = countries.slice(1, 4);
console.log(slicedcountries);
// step 3: use filter() to get countries with names longer than 5 characters
let length = 5;
let filtered = countries.filter(n => n.length>=length)
console.log(filtered)



