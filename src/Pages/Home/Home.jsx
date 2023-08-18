import React, { useState, useEffect } from "react";
import Product from "../../components/Produits.jsx";
import "../../assets/css/home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const [produitsData, setProduitsData] = useState([]);

  // Récupérer les données
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProduitsData(json);
      });
  }, []);

  return (
    <div>
      <h1>Money Dynasty</h1>

      <div className="caroussel">
        <input type="radio" name="position" />
        <input type="radio" name="position" />
        <input type="radio" name="position" defaultChecked />
        <input type="radio" name="position" />
        <input type="radio" name="position" />
        <main id="carousel">
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
        </main>
      </div>
      {/* Caroussel que j'ai voler sans aucun respect */}
      <hr />
      <h1>Nos produits phares:</h1>

      <div className="Ctn">
        {produitsData.slice(0, 5).map((product, index) => ( //Slice pour afficher que les 5 premier, map pour crée un nouveau tableau product
          <Product key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
