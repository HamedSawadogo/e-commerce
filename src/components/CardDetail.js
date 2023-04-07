import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../features/cart.slice";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import HeaderCart from "./HeaderCart";

export const Loader = () => {
  return (
    <Box sx={{ display: "flex", margin: 2, justifyContent: "center" }}>
      <CircularProgress />
    </Box>
  );
};
const CardDetail = () => {
  const { id } = useParams();
  const [article, setArticle] = useState([]);
  const [isAded, setAded] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [visible, setvisible] = useState(false);
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  console.log(selector);
  useEffect(() => {
    setTimeout(() => {
      axios
        .get(`http://localhost:3100/articles/${id}`)
        .then((res) => setArticle(res.data));
      setLoading(false);
    }, 500);
  }, []);
  const addTocart = () => {
    const Addarticle = {
      id: parseInt(article.id),
      img: article.image,
      name: article.title,
      price: article.price,
      quantity: quantity,
    };
    dispatch(addCart(Addarticle));
    setAded(true);
    setvisible(true);
  };
  return (
    <>
      <Navbar />
      <HeaderCart />
      {loading ? (
        <Loader />
      ) : (
        <>
          {visible ? (
            <div className="container">
              <div className="alert alert-success m-1 p-3" role="alert">
                <strong>FASO-ESHOP produit ajouté avec success</strong>
                <button
                  type="button"
                  className="close"
                  data-dismiss="alert"
                  aria-label="Close"
                  onClick={() => setvisible(false)}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            </div>
          ) : (
            ""
          )}

          <div className="card-detail-container">
            <img src={article.image} alt="" />
            <small>{article.category}</small>
            <h4>{article.title}</h4>
            <p>{article.description}</p>
            <strong>prix {article.price} €</strong>
            {!isAded ? (
              <button onClick={() => addTocart()}>
                {"ajouter au panier"}
                <AddShoppingCartIcon className="add-cart" />
              </button>
            ) : (
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
            )}
          </div>
        </>
      )}
    </>
  );
};

export default CardDetail;
