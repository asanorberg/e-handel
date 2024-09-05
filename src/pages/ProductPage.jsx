import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  // const { id } = useParams(); //hämta id från URL
  //test
  const id = 1; // Hardcoded ID for testing
  const [product, setProduct] = useState(null);
  //   const [loading, setLoading] = true;
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    //Hämta produktdata baserad på produktens id
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const productData = await response.json();
        setProduct(productData);
        console.log(productData);
        // setLoading(false);
      } catch (error) {
        console.error("Product fetch failed");
        // setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  return product ? (
    <div className="flex w-full text-black">
      <div className="flex flex-col w-full md:w-1/2 px-4 mb-8 md:mb-0">
        {" "}
        <img className="w-[200px]" src={product.image} alt={product.title} />
      </div>
      <div className="flex-col bg-white">
        <h1 className="mb-2 font-heading text-3xl">{product.title}</h1>
        <h3>${product.price}</h3>

        <p className="text-gray-700 text-lg">{product.description}</p>
        <div>Category: {product.category}</div>
        <div>
          Rating: {product.rating.rate} ({product.rating.count} reviews)
        </div>
        <div class="flex flex-wrap mb-6 items-center gap-2">
          <div class="flex flex-0">
            <div className="inline-flex items-center font-bold text-gray-500 input-bg border border-gray-300 overflow-hidden input-rounding">
              <button className="h-full px-4 input-bg hover:text-body hover:bg-gray-100 focus:outline-none">
                -
              </button>
              <input
                class="w-9 m-0 button-py text-center bg-transparent text-body border-0 focus:ring-transparent focus:outline-none"
                type="numeric"
                placeholder="1"
              />
              <button className="h-full px-4 input-bg hover:text-body hover:bg-gray-100 focus:outline-none">
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default ProductPage;
