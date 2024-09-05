// Presentational Component for individual product cards
import React from "react";

const ProductCard = ({ product }) => (
  <div className="border p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
    <img
      src={product.image}
      alt={product.title}
      className="w-full h-40 object-contain mb-4"
    />
    <h2 className="text-gray-700 text-md font-semibold mb-2">
      {product.title}
    </h2>
    <p className="text-gray-700 mb-2">${product.price}</p>
  </div>
);

export default ProductCard;
