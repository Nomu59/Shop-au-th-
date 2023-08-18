import React from "react";
import { Link } from "react-router-dom";
import Cart from "../assets/img/Cart.png";
import Logo from "../assets/img/logo.png";
import SearchLogo from "../assets/img/Search.png";
import "../assets/css/navbar.css"

const Navbar = () => {
  return (
    <nav className="Navbar">
      <div className="divLogo">
        <Link to="/">
          <img className="Logo" src={Logo} height={80} width={80} alt="Logo" />
        </Link>
      </div>

      <div className="divSearch">
        <Link className="Search" to="Search">
          Rechercher
          <span>
            <img src={SearchLogo} height={30} width={30} alt="" />
          </span>
        </Link>
      </div>

      <div className="divConnexion">
        <Link className="Connexion" to="/Connexion">
          Connexion
        </Link>
      </div>
      <Link to="/Cart">
        <img src={Cart} height={50} width={50} alt="Cart" />
      </Link>
    </nav>
  );
};

export default Navbar;
