import React, { useState } from "react";
import Navbar from "../components/Navbar";
import HeaderCart from "../components/HeaderCart";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../components/cart-element/CartItem";
import { emptyCart } from "../features/cart.slice";

const Cart = () => {
  const articles = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const total = articles.reduce(
    (acc, red) => acc + red.price * red.quantity,
    0
  );
  const handleCart = () => {
    dispatch(emptyCart());
  };
  return (
    <div>
      <Navbar />
      <HeaderCart />
      <div className="cart-content-container">
        <h4>Total: {total && parseFloat(total).toFixed(2)} €</h4>
        {articles.length > 0 && (
          <input
            type="button"
            onClick={() => handleCart()}
            value="vider le pannier"
          />
        )}
      </div>
      {articles.length > 0 ? (
        articles?.map((product) => (
          <CartItem article={product} key={product.id} />
        ))
      ) : (
        <h5>Votre pannier est vide</h5>
      )}
    </div>
  );
};

export default Cart;
