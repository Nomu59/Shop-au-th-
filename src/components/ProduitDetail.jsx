import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../assets/css/productDetail.css";
import Product from "./Produits";

const ProduitDetail = () => {
  const [Produit, setProduit] = useState([]);
  const { id } = useParams(); //recupere l'id grace a une magie inconnu
  
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/" + id) //fetch seulement le produit avec l'id
      .then((res) => res.json())
      .then((json) => {
        setProduit(json);
      });
  }, []);

  return (
    <div>
      <div className="produitDesc">
        <div className="divImg">
          <img src={Produit.image} alt={Produit.title} />
        </div>
        <div className="divDesc">
          <p className="produitTitle">{Produit.title}</p>
          <p className="produitPrice">{Produit.price}€</p>
          <p className="produitDescTxt">{Produit.description}</p>
          {/* <p>{Produit.rating.rate}</p> */}
          <a className="btn" href="#">Ajouter au panier</a>
        </div>
      </div>
    </div>
  );
};

export default ProduitDetail;
