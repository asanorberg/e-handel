import React, { useState, useEffect } from "react";

const ProductPage = () => {
  const { id } = usepParams(); //hämta id från URL
  //test
  //   const id = 1; // Hardcoded ID for testing

  const [product, setProduct] = useState(null);
  //   const [loading, setLoading] = true;

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
      <div>
        {" "}
        <img className="w-[200px]" src={product.image} alt={product.title} />
      </div>
      <div className="flex-col bg-white">
        <h1 className="text-sm text-bold">{product.title}</h1>
        <h3>${product.price}</h3>

        <p>{product.description}</p>
        <div>Category: {product.category}</div>
        <div>
          Rating: {product.rating.rate} ({product.rating.count} reviews)
        </div>
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default ProductPage;
