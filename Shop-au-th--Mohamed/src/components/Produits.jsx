import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Product = ({ product }) => {
  const navigate = useNavigate();
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${product.id}`)
      .then((response) => {
        setProductData(response.data);
      })
      .catch((error) => {
        console.error("Une erreur s'est produite :", error);
      });
  }, [product.id]);

  const goToDesc = (id) => {
    navigate("/produit/" + id);
  };

  const rateStar = (rate) => {
    const stars = [];
    for (let i = 1; i <= rate; i++) {
      stars.push("★");
    }
    return stars.join(" ");
  };

  return (
    <div
      className="opacity-70 ml-5 mr-5  rounded-lg cursor-pointer p-2 bg-neutral-300 mt-5 w-48 text-center mb-2"
      onClick={() => goToDesc(product.id)}
    >
      <div className="flex  flex-row flex-wrap justify-center text-xl">
        {productData ? ( // si productData n'est pas null alors il affiche les truc en dessous
          <>
            <img
              className="rounded-lg p-5 w-40 h-40 bg-white"
              src={productData.image}
              alt={productData.title}
            />
            <p className="price font-bold text-right">{productData.price}€</p>
            <p className="productTitle text-lg">{productData.title}</p>
            <p className="rate ">
              {rateStar(productData.rating.rate)} {productData.rating.rate}/5
            </p>
          </>
        ) : (
          //si il est null alors :
          <p className="text-black">Chargement en cours...</p>
        )}
      </div>
    </div>
  );
};

export default Product;
