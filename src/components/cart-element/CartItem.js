import React, { useEffect } from "react";
import { useState } from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import "./cart-item.scss";
import { useDispatch, useSelector } from "react-redux";
import { addCart, deleteCart } from "../../features/cart.slice";
const CartItem = ({ article }) => {
  const articles = useSelector((state) => state.cart);
  const artObj = articles.filter((art) => art.id === article.id);
  const [quantity, setQuantity] = useState(
    artObj.quantity ? artObj.quantity : 1
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const articleUpdated = {
      id: parseInt(article.id),
      img: article.image,
      name: article.title,
      price: article.price,
      quantity,
    };
    dispatch(addCart(articleUpdated));
  }, [quantity]);
  return (
    <div className="cart-item">
      <div className="article-info">
        <img src={article.img} alt="image d'article" />
        <h4>{article.name}</h4>
      </div>
      <div className="container-cart">
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
          <p>
            Prix Unitaire <strong> {article.price} €</strong>
          </p>
        </div>
      </div>
      <div
        className="delete-item"
        onClick={() => dispatch(deleteCart(article.id))}
      >
        <DeleteForeverIcon />
      </div>
    </div>
  );
};

export default CartItem;
