import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  // State for the fetched products
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getData() {
      try {
        // This fetches all 20 products from the API
        const data = await fetch("https://fakestoreapi.com/products");
        const response = await data.json();
        setProducts(response);
      } catch (error) {
        console.log("error fetching products", error);
      }
    }
    getData();
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
    if (
      window.confirm(
        "Product added to cart! Do you want to go to the cart now?"
      )
    ) {
      navigate("/cart");
    }
  };

  return (
    <div className="bg-white py-12 px-4 sm:px-8 lg:px-16">
      {/* Grid container for product cards */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Mapping over products and rendering a ProductCard for each */}
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
