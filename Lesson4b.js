// Loops
// Looping statements allow us to execute a block of code untill a condition is mate
// we have several types of loops in JS
//1. For loop

// structure of the for loop
// for(initialization;condition;increement/decrement){
// code to be executed appears here
//}

for (let i =1; i<=5;i++){
    console.log("The values are :" +i)
}

// 2. While loop
// structure
// initialize a variable with some values
// while (condition){
//  code to be executed
// increement / decrement
// }

let j =1;
while(j<=5){
    console.log("The values of j is: " +j)
    j++
};
// create a while program that prints from 20 down to 10
let num = 10;
while(num <= 20){
    console.log("The number is " + num)
    num ++
}

 // Do while loop
 // this loop is guaranteed to run atleast once even if the condition is false
 // structure : initialize a variable with new values
 // do {
 //  code to be executed
 //  } while (condition);
 let p = 2;

 do {
    console.log(p)
    p++
 }while (p<=10);

 // Loops can be used to loop through/iterate trough an array

 let countries = ["Kenya","TZ","Uganda","Burundi","Congo","Somali","Ethiopia"]
 console.log(countries)
 for(let i=0; i<countries.length;i++){
    console.log(countries[i])
 }

 // Break and continue key words in loops
 // continue: is a keyword that is used wit the continuatiation of the loop in a condition met
 //break : is a keyword that is used to terminate the execution of the loop after a certain condition is met
 // example 1 : continue
 for (let i=1; i<=10;i++){
    

    if (i===5){
        console.log("Five is here.")
        continue;
    }
    console.log(i)
 }

 // example 2 : break
 for(let i=20;i<=30;i++){
    console.log(i)
    if(i === 26)
        break;
 }