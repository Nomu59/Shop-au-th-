import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/img/logo.png";
import "../assets/css/navbar.css";
import Cart from "../assets/img/Cart.png";

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
    <nav className="overflow-x-hidden">
      <nav className="bg-white dark:bg-black border-b rounded-b-2xl">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
          <a href="/" className="flex items-center">
            <img
              className="Logo"
              src={Logo}
              height={80}
              width={80}
              alt="Logo"
            />
          </a>{" "}
          <div className="flex md:order-2">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
              <li>
                <a
                  href="#"
                  className="text-2xl block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white"
                  aria-current="page"
                  onClick={
                    connexionStatus === 1
                      ? Logout
                      : () => navigate("/Connexion")
                  }
                >
                  {connexionText}
                </a>
              </li>
              {/* <li>
                <a
                  href="/Cart"
                  className="text-2xl block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white"
                  aria-current="page"
                >
                  <img src={Cart} height={35} width={35} alt="" />
                </a>
              </li>{" "} */}
            </ul>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
              <li>
                <Link to="/Search">
                  <a
                    href="#"
                    className="text-2xl block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    aria-current="page"
                  >
                    Rechercher
                  </a>{" "}
                </Link>
              </li>
              <li>
                <Link to="/Jewelery">
                  <a
                    href="#"
                    className="text-2xl block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Categorie
                  </a>{" "}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </nav>
  );
};

export default Navbar;


{/* <nav className="">
<header className="">
  <a className="clickable-image" href="">
    <img src={Logo} alt="" className="image" />
  </a>
  <div className="container">
    <input type="text" placeholder="Rechercher..." />
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
</nav> */}