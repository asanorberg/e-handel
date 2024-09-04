// <------- Åsa ------->

import React, { useState, useEffect } from "react";

const ProductPage = () => {
  const { id } = usepParams(); //hämta id från URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = true;

  useEffect(() => {
    //Hämta produktdata baserad på produktens id
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      });
  }, [id]);

  return (
    <div className="bg-white">
      <h1>Här ska en unik produkt visas</h1>
      <p>Produktinfo</p>
    </div>
  );
};

export default ProductPage;
