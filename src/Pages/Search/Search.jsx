import React from "react";
import Produits from "../../components/Produits";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Search = () => {
  const params = useParams([]);
  const [produits, setProduits] = useState([]);
  console.log(params);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProduits(json));
  }, []);
  return (
    <div>
      <h1>Search </h1>
    </div>
  );
};

export default Search;
