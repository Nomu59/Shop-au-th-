import React, { useState, useEffect } from "react";
import axios from "axios";
import Carts from "../../components/Carts";
import "../../assets/css/cart.css";

const Cart = () => {
  const user = parseInt(localStorage.getItem("id"));
  const [cart, setCart] = useState([]);
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/carts`)
      .then((response) => {
        setCart(response.data);
      })
      .catch((error) => {
        console.error("Une erreur s'est produite :", error);
      });
  }, []);

  return (
    <div className="flex flex-row">
      <div className="flex flex-col w-3/4">
        {cart.map((cartItem, index) => {
          if (cartItem.userId === user) {
            return <Carts key={index} product={cartItem} user={user} />;
          }
          return null;
        })}
      </div>
      <div className="opacity-70 bg-neutral-300 mt-16 p-2 h-72 rounded-lg mt-100 float-right w-72 text-center ">
        <p className="mb-40">Prix total: 5€ </p>
        <a className="bg-white p-1 rounded-lg" href="/Paiement">
          Passer la commande
        </a>
      </div>
    </div>
  );
};

export default Cart;
