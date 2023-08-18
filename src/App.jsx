import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Login from "./Pages/Connexion/Login";
import Search from "./Pages/Search/Search";
import Cart from "./Pages/Cart/Cart";
import Home from "./Pages/Home/Home";
import ProduitDetail from "./components/ProduitDetail";

import "./App.css";
import "./assets/css/navbar.css";
import "./assets/css/animation.css";
import "./assets/font/RobotoCondensed-Regular.ttf";

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
        </Routes>
      </div>
    </>
  );
}

export default App;
