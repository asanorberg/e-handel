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
    <div className="align-element py-20">
      <div className="displayProduct grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className=" border p-4 rounded shadow">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover mb-2"
            />
            <h2 className="text-lg font-semibold">{product.title}</h2>
            <p className="text-gray-500">{product.price} SEK</p>
            <p className="text-gray-500">{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
