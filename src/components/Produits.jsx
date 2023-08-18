import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const navigate = useNavigate(); // pour utiliser useNavigate

  const goToDesc = (id) => {
    navigate("/produit/" + id); //recupere le product.id et redirige vers la bonne page
  }

  return (
    <div className="product" onClick={()=>goToDesc(product.id)}> // quand tu clique ça appel la const GotoDesc
      <img src={product.image} alt={product.title} />
      <p className="price">{product.price}€</p>
      <p>{product.title}</p>
      <br />
      <p>{product.rating.rate}/5</p>
    </div>
  );
};

export default Product;
