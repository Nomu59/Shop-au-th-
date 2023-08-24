import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import Login from "./Pages/Connexion/Login";
import Search from "./Pages/Search/Search";
import Cart from "./Pages/Cart/Cart";
import Home from "./Pages/Home/Home";
import ProduitDetail from "./components/ProduitDetail";
import Footer from "./components/Footer";
import Paiement from "./Pages/Paiement/Paiement.jsx";
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
          <Route path="/produit/:id" Component={ProduitDetail} /> // :id pour recup l'id 
          <Route path="/Paiement" element={<Paiement />} />
        </Routes>
        <div className="h-24"/>
          <Footer/> 
        
      </div>
    </>
  );
}

export default App;
