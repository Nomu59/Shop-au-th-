import "./App.css";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar";
import Login from "./Pages/Connexion/Login";
import Search from "./Pages/Search/Search";
import Cart from "./Pages/Cart/Cart";
import Home from "./Pages/Home/Home";
import Produits from "./components/Produits.jsx"

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="app">
        <Navbar />
        <Produits/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Connexion" element={<Login />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
