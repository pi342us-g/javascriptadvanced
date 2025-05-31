// Array methods
// map() method
let numbers = [ 1,2,3,4,5]
console.log(numbers)
console.log(typeof numbers)
// summing the numbers
let sum = 0
console.log(typeof sum)

let answer = numbers.map(n => sum = sum+n)
console.log("The answer is :"+ sum)

// by use of filter method create a program that is able to output the even number in given array
let evenNumbers = numbers.filter(e=> e%2 !=1)
console.log(evenNumbers)

// odd numbers
let odd = numbers.filter(o => o%2 ==1)
console.log(odd)

// Assignment
//Create an array of five numbers. use map to double them and filter to extract numbers greater than 5
// Use map() method to convert an array of prices with 16% value added tax VAT  and show the final cost
//Step1: create a list of 5 countries
//step2 : use slice() to get a portion of the list
// step 3: use filter() to get countries with names longer than 5 characters