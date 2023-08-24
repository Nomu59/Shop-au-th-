import React, { useState, useEffect } from "react";
import Product from "../../components/Produits.jsx";
import Caroussel from "../../components/Caroussel";
import axios from "axios";
import "../../assets/css/home.css";

const Home = () => {
  const [produitsData, setProduitsData] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProduitsData(response.data);
      })
      .catch((error) => {
        console.error("Une erreur s'est produite :", error);
      });
  }, []);

  return (
    <div>
      <h1 className="boss text-white text-3xl">Money Dynasty</h1>
      <Caroussel />
      <hr className="rounded-full	h-1 border-0 mt-12 w-2/3 m-auto bg-gray-500" />
      <h2 className="text-white text-center text-3xl mt-5">
        Nos produits phares:
      </h2>
      <div className="Ctn flex flex-row flex-wrap justify-center">
        {produitsData.slice(0, 5).map((product, index) => (
          <Product key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
