import React, { useState, useEffect } from 'react'; 
import axios from 'axios'; 
import Carts from '../../components/Carts';
import "../../assets/css/cart.css"

const Cart = () => {
  const user = parseInt(localStorage.getItem('id'));
  const [cart, setCart] = useState([]); 
  const [produit, setProduit] = useState([]);

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

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products`) 
      .then((response) => {
        setProduit(response.data);
      })
      .catch((error) => {
        console.error("Une erreur s'est produite :", error);
      });
  }, []); 

  // Calculer le prix total
  const totalPrice = cart
    .filter(cartItem => cartItem.userId === user)
    .reduce((total, cartItem) => {
      const product = produit.find(p => p.id === cartItem.productId);
      if (product) {
        total += product.price * cartItem.quantity;
      }
      return total;
    }, 0);

  return (
    <div className='flex flex-row'>
      <div className='flex flex-col w-3/4'>
      {cart.map((cartItem, index) => {
        if (cartItem.userId === user) { 
          return <Carts key={index} product={cartItem} />; 
        }
        return null; 
      })}
      </div>
      <div className='opacity-70 bg-neutral-300 mt-16 p-2 h-72 rounded-lg mt-100 float-right w-72 text-center '>
        <p>Prix total: {totalPrice}€ </p>
        <a href="/">Passer la commande</a>
      </div>
    </div>
  );
}

export default Cart;
