import React from "react";
import Navbar from "../components/Navbar";
import HeaderCart from "../components/HeaderCart";
import { useSelector } from "react-redux";
import { useState } from "react";

const Cart = () => {
  const selector = useSelector((state) => state.cart);
  const [quantity, setQuantity] = useState(1);
  console.error(selector);
  return (
    <div>
      <Navbar />
      <HeaderCart />
      {selector.length > 0 ? (
        selector?.map((product) => (
          <div className="cart-item" key={product.id}>
            <img src={product.img} style={{ width: 100, height: 100 }} alt="" />
            <h4>{product.name}</h4>
            <strong>prix {product.price} €</strong>
            <div className="set-cart">
              <input
                onClick={() => setQuantity(quantity + 1)}
                type="button"
                value={"+"}
              />
              <small>{quantity}</small>
              <input
                onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                type="button"
                value={"-"}
              />
            </div>
          </div>
        ))
      ) : (
        <h4
          style={{
            textAlign: "center",
          }}
        >
          Votre pannier est vide
        </h4>
      )}
    </div>
  );
};

export default Cart;
