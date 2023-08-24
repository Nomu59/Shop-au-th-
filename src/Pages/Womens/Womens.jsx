import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "../../components/Produits";

const Jewelery = () => {
  const [produitsData, setProduitsData] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/category/women's clothing")
      .then((response) => {
        setProduitsData(response.data);
      })
      .catch((error) => {
        console.error("Une erreur s'est produite :", error);
      });
  }, []);

  return (
    <div>
      <div className="Ctn flex flex-row flex-wrap justify-center mt-12 text-xl">
        {produitsData.map((produit, index) => {
          return <Product key={index} product={produit} />;
        })}
      </div>
    </div>
  );
};

export default Jewelery;
