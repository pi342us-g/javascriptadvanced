// https://sengi2025.pythonanywhere.com/api/getproducts
// On the above api endpoint extract the product_name, and the price and print them out
const fetchProducts = async () => {
  try {
    const res = await fetch("https://sengi2025.pythonanywhere.com/api/getproducts");
    const data = await res.json();

    // Check if data is an array
    if (Array.isArray(data)) {
      data.forEach((product, index) => {
        console.log(`Product ${index + 1}:`);
        console.log("  Name: " + product.product_name);
        console.log("  Cost: " + product.product_cost);
      });
    } else {
      console.error("Expected an array of products, but got:", data);
    }
  } catch (error) {
    console.error("The error is: " + error);
  }
};

fetchProducts();
  
