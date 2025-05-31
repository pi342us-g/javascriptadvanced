// array data type
// an array is a collection of related items which are of same data type
let fruits = ["Banana","Mangoes","Oranges","Grapes"]
console.log("The fruit on index number 2 is :" + fruits[2])

// some methods used to modify items of an array
// method 1 = push method
// we use it to add an item at the end of array
fruits.push("Apple")
console.log(fruits)

// method 2 slice method
// used to output from a given index to another
let somefruits = fruits.slice(1,2)
console.log(somefruits)

// pop method - we use it to remove item of an array that apears at thee end
fruits.pop()
fruits.pop()
console.log(fruits)

// length method - used to determine the number of items of  array
console.log("The number of items in our fruits array is:" + fruits.length)
 
let cities = ["Nairobi","Mombasa","Nakuru","Eldoret","Meru","Machakos"];

// the filter method is used to show output based on some rules
let updatedCities = cities.filter(item => item !== "Meru");
 // it will create a new array of cities without the city meru
 console.log(updatedCities)
