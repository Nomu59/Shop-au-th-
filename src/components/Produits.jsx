import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom"

const Produits = () => {
  const params = useParams([]);
  const [produits, setProduits] = useState([]);
  console.log(params);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/1")
      .then((res) => res.json())
      .then((json) => setProduits(json));
  }, []);

  return(<div>
     <h1 className="title">{produits.title}</h1> 
    <img src={produits.image} className="prod-image" alt="prod" />
    
    <p>{produits.price}</p>
    <p>{produits.description}</p>
    <p>{produits.category}</p>
    
  </div>)
  ;
};

export default Produits;
