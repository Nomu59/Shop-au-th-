import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

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
      <h2>Détails du produit: {Produit.title}</h2>
      <img src={Produit.image} alt={Produit.title} />
    </div>
  );
};

export default ProduitDetail;
