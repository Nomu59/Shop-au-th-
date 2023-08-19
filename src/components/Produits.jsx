import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const navigate = useNavigate();

  const goToDesc = (id) => {
    navigate("/produit/" + id);
  }

  const rateStar = (rate) => {
    const stars = [];
    for (let i = 1; i <= rate; i++) { // si i > a la note, ça ajoute une etoile 
      stars.push("★");
    }
    return stars.join(" "); // join pour separer les etoile par un espace
  };

  return (
    <div className="product" onClick={() => goToDesc(product.id)}>
      <img src={product.image} alt={product.title} />
      <p className="price">{product.price}€</p>
      <p>{product.title}</p>
      <p>{rateStar(product.rating.rate)} {product.rating.rate}/5</p> {/* appel la fonction avec le rate en param  */}
    </div>
  );
};

export default Product;
