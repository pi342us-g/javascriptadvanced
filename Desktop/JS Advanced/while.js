let i = 100;
while (i >= 30) {
  console.log(i);
  i--;
}
//assignment 3b
// create a js program that checks if a number entered is positive or negative or zero

let number = 0;
if (number > 0) {
  console.log("The number is positive");
} else if (number < 0) {
  console.log("The number is negative");
} else if (number === 0) {
  console.log("The number is zero");
} else {
  console.log(number, "is not a number");
}

// Read and make some short notes on comparison operators in js, logical operators and assignment operators in js.

// assignment 4a
// Assignment :create a register function
// it will have username,email,password and phone
// check if the email is valid by checking the at symbol and dot
// check password if is strong and finally resgister successfully
function register(username, email, password, phone) {
  if (email.includes("@") && email.includes(".")) {
    if (password.length >= 8) {
      console.log("Registration successfully");
    } else {
      console.log("Password must contain a minimum of 8 chars");
    }
  } else {
    console.log("Your email should contain @ and . symbols! ");
  }
}

register("Pius", "pius@gmail.com", "Dghk6mk.", "0792342944");

// assignment
// Remind yourselves on arrow functions
// create an arrow function that adds two numbers. Call it summation.
const summation = () => {
  num1 = 34;
  num2 = 12;
  let add = num1 + num2;
  console.log(add);
};
summation();
// Assignment: Create an arrow function that is able to find the simple interest of three different individuals

//   Assignment use async to
// https://official-joke-api.appspot.com/random_joke
// Extract and print out the contents of the setup and the punchline

// https://sengi2025.pythonanywhere.com/api/getproducts
// On the above api endpoint extract the product_name, and the price and print them out

//  Assignment: Create a button in HTML that changes a paragraph's text when clicked using
//JavaScript
