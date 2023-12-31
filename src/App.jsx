import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./Pages/Connexion/Login";
import Search from "./Pages/Search/Search";
import Cart from "./Pages/Cart/Cart";
import Home from "./Pages/Home/Home";
import ProduitDetail from "./components/ProduitDetail";
import Register from "./Pages/Register/Register";
import Jewelery from "./Pages/Jewelery/Jewelery";
import Electronics from "./Pages/Electronics/Electronics";
import Mens from "./Pages/Mens/mens";
import Womens from "./Pages/Womens/Womens";
import Paiement from "./Pages/Paiement/Paiement";

import "./App.css";
import "./assets/css/navbar.css";
import "./assets/css/animation.css";
import "./assets/font/RobotoCondensed-Regular.ttf";
import "./assets/font/AQUATIC.ttf";

function App() {
  return (
    <>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Connexion" element={<Login />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Jewelery" element={<Jewelery />} />
          <Route path="/Electronics" element={<Electronics />} />
          <Route path="/Womens" element={<Womens />} />
          <Route path="/Mens" element={<Mens />} />
          <Route path="/Paiement" element={<Paiement />} />
          <Route path="/produit/:id" Component={ProduitDetail} /> // :id pour
          recup l'id
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
