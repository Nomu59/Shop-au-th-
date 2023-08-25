import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/img/logo.png";
import "../assets/css/navbar.css";
import Cart from "../assets/img/Cart.png";
import Search from "../assets/img/Search.png";
import Panier from "../assets/img/panier.png";
const Navbar = () => {
  const navigate = useNavigate();
  const [connexionStatus, setConnexionStatus] = useState(0);

  useEffect(() => {
    const statut = localStorage.getItem("connexion");
    setConnexionStatus(statut ? parseInt(statut) : 0);
  }, []);

  const Logout = () => {
    localStorage.setItem("connexion", 0);
    localStorage.setItem("id", 0);
    localStorage.removeItem("user");
    setConnexionStatus(0);
    console.log(1);
    navigate("/");
  };

  let connexionText = connexionStatus === 1 ? "Déconnexion" : "Connexion";

  return (
    <nav className="">
      <header>
        <a className="clickable-image" href="">
          <img src={Logo} alt="" className="image" />
        </a>
        <div className="container">
          <input
            className="search-bar"
            type="text"
            placeholder="Rechercher..."
          />
          <a className="clickable-image2" href="">
            <img src={Search} alt="" className="image2" />
          </a>
        </div>
        <div className="dropdown">
          <button className="dropdown-btn">Catégories</button>
          <div className="dropdown-content">
            <a href="#" class="bar-button">
              Vêtements Homme
            </a>
            <a href="#" class="bar-button">
              Vêtements Femme
            </a>
            <a href="#" class="bar-button">
              Accessoires
            </a>
            <a href="#" class="bar-button">
              Électronique
            </a>
          </div>
        </div>
        <a className="connexion" href="">
          Connexion
        </a>
        <a className="clickable-image3" href="">
          <img src={Panier} alt="panier" className="image3" />
        </a>
      </header>
    </nav>
  );
};

export default Navbar;
