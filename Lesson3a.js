let name = "  Alice Wanjiku  "
let age = 35
console.log(name)
// Removing leading/ trailing spaes and build a greeting using a string literals
console.log(name.trim())

let greeting = `Hello, ${name.trim()}! you are ${age} years old`
console.log(greeting)

// 2 convert the greetings to uppercase
let convertedGreeting = greeting.toUpperCase()
console.log(convertedGreeting)

// 3 Slice - it enables us to ectract characters from a given index to another
console.log(name.trim().slice(2,4))// output

// 4 includes function - it is used to check whether a given character  exist in a given string. 
//It returns a boolean value (true or false)
console.log(name.trim().includes("q"))

// 5 . toLowerCase() - it is used to convert all the characters of a string to lowercase
console.log(name.toLowerCase().trim())
// 6 substring() - similar to slice, it ectracts part of a string 
console.log(name.trim().substring(6,8).toLowerCase())

// 7 indexof("pass a letter") - returns the position of the first accurance of a letter.
console.log(name.trim().indexOf("w"))
//8 .Length - returns the total number of characters (including spaces)
console.log(name.trim().length)

// 9 .replace (old,new) - replaces first occurance of a substring 
let replacedName = name.replace("Alice","Jesica")
console.log(replacedName)

// find out how to replace multiple occurence at once

// 10 . CharAt(index) - this function normally finds/ outputs the character in a given index
console.log("The letter on index five is :"+ name.trim().charAt(4))

// 11 . split (separator) - splits the string into an array
console.log(name.trim().split())

// 12 . endswith(substring) - checks if the string ends with a certain value. it returns a boolean value
console.log(name.trim().endsWith("Wanjiku"))
// 13 . startsWith(substring)- checks whether the string starts with a certain value
console.log(name.trim().startsWith("Alice"))

// 14 repeat(n) - repeats the string n number of times
console.log(name.trim().repeat(3))