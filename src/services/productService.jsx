//The function that handles the API call for all products
export const fetchProducts = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    return await response.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
