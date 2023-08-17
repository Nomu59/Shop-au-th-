import React, { useState, useEffect } from "react";

const Search = () => {
  //var
  const [produitsData, setProduitsData] = useState([]);
  const [filtre, setFiltre] = useState("");
  const [radioValue, setRadioValue] = useState(""); // Ajout de l'état pour la valeur du bouton radio
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
    setRadioValue(event.target.value); // Mettre à jour la valeur du bouton radio
  };

  const updatePrix = (event) => {
    setPrix(event.target.value);
  };

  return (
    <div>
      <h1>Search</h1>
      <input
        type="text"
        id="search"
        placeholder="Search for a product"
        onChange={updateSearch}
      />

      <div>
        <label for="star">1</label>
        <input
          type="radio"
          id="choix1"
          name="choix"
          onChange={updateRadio}
          value="1"
        />

        <label for="star">2</label>
        <input
          type="radio"
          id="choix2"
          name="choix"
          onChange={updateRadio}
          value="2"
        />

        <label for="star">3</label>
        <input
          type="radio"
          id="choix3"
          name="choix"
          onChange={updateRadio}
          value="3"
        />

        <label for="star">4</label>
        <input
          type="radio"
          id="choix4"
          name="choix"
          onChange={updateRadio}
          value="4"
        />

        <label for="star">5</label>
        <input
          type="radio"
          id="choix5"
          name="choix"
          onChange={updateRadio}
          value="5"
        />
      </div>

      <div>
        <label for="prix1">5€</label>
        <input
          type="radio"
          id="prix1"
          name="prix"
          value="5"
          onChange={updatePrix}
        />
        <label for="prix2">10€</label>
        <input
          type="radio"
          id="prix2"
          name="prix"
          value="10"
          onChange={updatePrix}
        />
        <label for="prix3">25€</label>
        <input
          type="radio"
          id="prix3"
          name="prix"
          value="25"
          onChange={updatePrix}
        />
        <label for="prix4">50€</label>
        <input
          type="radio"
          id="prix4"
          name="prix"
          value="50"
          onChange={updatePrix}
        />
        <label for="prix5">100€</label>
        <input
          type="radio"
          id="prix5"
          name="prix"
          value="100"
          onChange={updatePrix}
        />
      </div>

      <div id="Ctn">
        {produitsData.map((product, index) => {
          // crée un nouveau tableau product avec les valeur de produitsData qui respecte les conditions en dessous
          if (
            product.title.toLowerCase().indexOf(filtre) > -1 &&
            product.rating.rate > radioValue &&
            product.price > prix

            // recupere que les article qui contient la valeur du filtre, sinon renvoie -1
            // a son rate superieur a la value de radio
            // a son prix superieur a la value du prix
          ) {
            //affiche les article qui respecte les condition
            return (
              <div key={index} className="product">
                <img src={product.image} alt={product.title} />
                <p>{product.title}</p>
              </div>
            );
          }
          return null; // si y'a rien alors ça affiche rien zer
        })}
      </div>
    </div>
  );
};

export default Search;
