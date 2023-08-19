import React, { useState, useEffect } from "react";
import Product from "../../components/Produits";
import Star from "../../assets/img/star.png";
import "../../assets/css/search.css";

const Search = () => {
  //var
  const [produitsData, setProduitsData] = useState([]);
  const [filtre, setFiltre] = useState("");
  const [radioValue, setRadioValue] = useState("");
  const [prix, setPrix] = useState("0");

  //recup data
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProduitsData(json);
      });
  }, []);

  //update les valeur a chaque changement de valeur zer
  const updateSearch = (event) => {
    setFiltre(event.target.value.toLowerCase());
  };

  const updateRadio = (event) => {
    setRadioValue(event.target.value);
  };

  const updatePrix = (event) => {
    setPrix(event.target.value);
  };

  return (
    <div>
      <h1>Rechercher un article</h1>
      <input
        type="text"
        autocomplete="off"
        name="text"
        class="input"
        onChange={updateSearch}
        placeholder="Rechercher"
      />

      <div className="formCtn">
        <div className="formRate">
          <p>Trier par note</p>
          <img src={Star} alt="star" height={20} width={20} />
          <img src={Star} alt="star" height={20} width={20} />
          <img src={Star} alt="star" height={20} width={20} />
          <img src={Star} alt="star" height={20} width={20} />
          <img src={Star} alt="star" height={20} width={20} />
          <input
            type="radio"
            id="choix5"
            name="choix"
            onChange={updateRadio}
            value="5"
          />
          <br />
          <img src={Star} alt="star" height={20} width={20} />
          <img src={Star} alt="star" height={20} width={20} />
          <img src={Star} alt="star" height={20} width={20} />
          <img src={Star} alt="star" height={20} width={20} />
          <input
            type="radio"
            id="choix4"
            name="choix"
            onChange={updateRadio}
            value="4"
          />
          <br />
          <img src={Star} alt="star" height={20} width={20} />
          <img src={Star} alt="star" height={20} width={20} />
          <img src={Star} alt="star" height={20} width={20} />
          <input
            type="radio"
            id="choix3"
            name="choix"
            onChange={updateRadio}
            value="3"
          />
          <br />
          <img src={Star} alt="star" height={20} width={20} />
          <img src={Star} alt="star" height={20} width={20} />
          <input
            type="radio"
            id="choix2"
            name="choix"
            onChange={updateRadio}
            value="2"
          />
          <br />
          <img src={Star} alt="star" height={20} width={20} />
          <input
            type="radio"
            id="choix1"
            name="choix"
            onChange={updateRadio}
            value="1"
          />
        </div>

        <br />

        <div className="formPrix">
          <p>Trier par prix</p>
          <input
            type="radio"
            id="prix1"
            name="prix"
            value="5"
            onChange={updatePrix}
          />
          <label for="prix1">5€</label>
          <br />
          <input
            type="radio"
            id="prix2"
            name="prix"
            value="10"
            onChange={updatePrix}
          />
          <label for="prix2">10€</label>
          <br />
          <input
            type="radio"
            id="prix3"
            name="prix"
            value="25"
            onChange={updatePrix}
          />
          <label for="prix3">25€</label>
          <br />
          <input
            type="radio"
            id="prix4"
            name="prix"
            value="50"
            onChange={updatePrix}
          />
          <label for="prix4">50€</label>
          <br />
          <input
            type="radio"
            id="prix5"
            name="prix"
            value="100"
            onChange={updatePrix}
          />
          <label for="prix5">100€</label>
          <br />
        </div>
      </div>

      <div id="Ctn">
        {produitsData.map((Produit, index) => {
          // crée un nouveau tableau product avec les valeur de produitsData qui respecte les conditions en dessous
          if (
            Produit.title.toLowerCase().indexOf(filtre) > -1 &&
            Produit.rating.rate > radioValue &&
            Produit.price > prix

            // recupere que les article qui:
            // contient la valeur du filtre, sinon renvoie -1
            // a son rate superieur a la value de radio
            // a son prix superieur a la value du prix
          ) {
            return <Product key={index} product={Produit} />;
            //affiche les article en utilisant le component Product,  qui respecte les condition
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default Search;
