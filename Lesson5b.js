//Async and await functions
//These two key words are used when the function you have is expecting some other additional 
//info/ data from outside the function

const fetchData = async()=>{
    try {
        // send a request to the API (This will definitely give us a response)
        let response = await  fetch('https://api.chucknorris.io/jokes/random')

        // convert the response to JSON format (also returns a promise)
        let {created_at,value}= await response.json();

        // print the date and the joke that was generated
        console.log("Date created" + created_at)

        // print a joke
        console.log("Joke: "+ value)

    } catch (error) {
        // catch and handle the errors(Like bad response)
        console.error("Error fetching data "+ error)
    }
}
// call the function
fetchData()

//   Assignment use async to 
// https://official-joke-api.appspot.com/random_joke
// Extract and print out the contents of the setup and the punchline

// https://sengi2025.pythonanywhere.com/api/getproducts
// On the above api endpoint extract the product_name, and the price and print them out