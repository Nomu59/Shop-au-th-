import React from "react";
import { Link } from "react-router-dom";
import Cart from "../assets/img/Cart.png";
import Logo from "../assets/img/logo.png";
import SearchLogo from "../assets/img/Search.png";
const Navbar = () => {
  return (
    <nav className="Navbar">

      <Link className="Search" to="Search">
        Rechercher
        <span>
          <img src={SearchLogo} height={30} width={30} alt="" />
        </span>
      </Link>

      <Link to="/">
        <img className="Logo" src={Logo} height={80} width={80} alt="Logo" />
      </Link>

      <Link className="Connexion" to="/Connexion">Connexion</Link>
      {/* <Link to="/Cart"><img src={Cart} height={50} width={50} alt="Cart" /></Link> */}
    </nav>
  );
};

export default Navbar;
