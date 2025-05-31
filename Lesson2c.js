// Object data type
// an object is data type that organise data in key value pair
let student ={
    // properties of an object
    name:"Pius ndubi",
    age: 22,
    grade: "A",
    isEnrolled: true
};
// printing out the entire object
console.log(student)
// verifying the data type
console.log("The type of student is: "+ typeof student)

// Access the values by use of dot notation
console.log("The name of student is :" +student.name)
console.log("The age of student is :"+ student.age)
// Access the values with bracket notation
console.log("The grade of student is :"+student["grade"])
console.log("The student is enrolled "+ student["isEnrolled"])

//Assignment: create two object of a player a car

let user = {
    username :"Piusndubi",
    email: "ndubipius@gmail.com"
};
//Destructing is the maching/ ectracting of the values of an object as you put them into variables
//Destructuring of properties of object
let {username,email}=user;
console.log(username)
console.log(email)

//example 2 
let country = {
    countryname: "Kenya",
    population : 54000000,
    continent: " Africa",
    language:"Eng"

};
// properties of the above object have been destructured as shown below
let {countryname,population,continent,language}=country;
console.log("The country name is "+ countryname)
console.log("The country is on "+ continent)

// Assignment create an object product with properties id name cost quantity and description. 
//use destructuring to extract and log them out