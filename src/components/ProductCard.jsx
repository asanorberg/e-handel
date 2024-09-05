// Presentational Component for individual product cards
// ProductCard.jsx
import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  //limit the title of the products to no more than 3 words
  //split title string into 3 words and joining back to a string

  const limitedTitle = product.title.split(" ").slice(0, 3).join(" ");

  return (
    <div className="border p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <img
        src={product.image}
        alt={limitedTitle}
        className="w-full h-40 object-contain mb-4"
      />
      <h2 className="text-gray-700 text-md font-semibold mb-2">
        {limitedTitle}
      </h2>
      <p className="text-gray-700 mb-2">${product.price}</p>
      <Link to={`/product/${product.id}`}>View Details</Link>
    </div>
  );
};

export default ProductCard;
