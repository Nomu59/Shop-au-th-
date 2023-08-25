import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Carts = ({ product }) => {
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




  return (
    <div
      className="opacity-70 ml-52 mr-5  rounded-lg cursor-pointer p-2 bg-neutral-300 mt-5 w-5/12 text-center"
    >
      <div className="">
        {productData ? ( // si productData n'est pas null alors il affiche les truc en dessous
          <>
          <div className="text-xl flex flex-row">

            <img
              className="rounded-lg p-2 w-40 h-40 bg-white"
              src={productData.image}
              alt={productData.title}
              />
            <p className="productTitle text-lg">{productData.title}</p>
              </div>
            {/* <p className="prodDescription text-lg">{productData.description}</p> */}
            <input type="number" className="" min="1" max="100" />
            <p className="price font-bold text-right">{productData.price}€</p>

          </>
        ) : (
          //si il est null alors :
          <p className="text-black">Chargement en cours...</p>
        )}
      </div>
      <div className="">
      </div>
    </div>
  );
};

export default Carts;
