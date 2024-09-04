import React, { useState, useEffect } from "react";

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const data = await fetch("https://fakestoreapi.com/products");
        const response = await data.json();
        setProducts(response);
      } catch (error) {
        console.log("error fetching products", error);
      }
    }
    getData();
  }, []);

  return (
    <div className="bg- bg-white py-12 px-4 sm:px-8 lg:px-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-40 object-contain mb-4"
            />
            <h2 className="text-md font-semibold mb-2">{product.title}</h2>
            <p className="text-gray-600 mb-2">{product.price} SEK</p>
            <p className="text-gray-500 text-sm">{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
