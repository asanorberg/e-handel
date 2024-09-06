import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { id } = useParams(); //hämta id från URL
  //test
  // const id = 1; // Hardcoded ID for testing
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    //Hämta produktdata baserad på produktens id
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const productData = await response.json();
        setProduct(productData);
        console.log(productData);
      } catch (error) {
        console.error("Product fetch failed");
      }
    };
    fetchProduct();
  }, [id]);

  const plusQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const minusQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity - 1);
  };

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (value >= 1) {
      setQuantity(value);
    }
  };

  return product ? (
    <div className="flex flex-col md:flex-row w-full text-black p-10 bg-teal-500">
      <div className="flex justify-center md:w-1/2 px-4 mb-8 md:mb-0 bg-pink-400">
        <img
          className="w-[300px] h-[300px] object-cover" // Fixed size for image
          src={product.image}
          alt={product.title}
        />
      </div>

      <div className="flex flex-col bg-white p-4">
        <h1 className="mb-2 font-heading text-3xl">{product.title}</h1>
        <h3 className="text-lg font-bold">${product.price}</h3>

        <p className="text-gray-700 text-lg mb-4">{product.description}</p>
        <div className="text-sm text-gray-600 mb-2">
          Category: {product.category}
        </div>
        <div className="text-sm text-gray-600 mb-6">
          Rating: {product.rating.rate} ({product.rating.count} reviews)
        </div>

        <div className="flex flex-wrap items-center gap-2 mb-6">
          <div className="flex py-2 items-center font-bold text-gray-500 border border-gray-300 rounded-lg">
            <button
              onClick={minusQuantity}
              className="h-full px-4 hover:bg-gray-100 focus:outline-none"
            >
              -
            </button>
            <input
              className="w-9 text-center bg-transparent border-0 focus:ring-transparent focus:outline-none"
              type="numeric"
              value={quantity}
              onChange={handleInputChange}
            />
            <button
              onClick={plusQuantity}
              className="h-full px-4 hover:bg-gray-100 focus:outline-none"
            >
              +
            </button>
          </div>

          <button className="w-full md:w-auto bg-green-800 text-white px-4 py-2 rounded-lg hover:bg-green-700">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default ProductPage;
