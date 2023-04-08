import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addCart } from "../features/cart.slice";
import HeaderCart from "./HeaderCart";
import Alert from "./alert/Alert";
import Loader from "./loader/Loader";

const CardDetail = () => {
  const { id } = useParams();
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visible, setvisible] = useState(false);
  const dispatch = useDispatch();

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
      quantity: 1,
    };
    dispatch(addCart(Addarticle));
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
          {visible && (
            <Alert
              message={"FASO-ESHOP produit ajouté avec success"}
              setVisibility={setvisible}
            />
          )}
          {article && (
            <div className="card-detail-container">
              <img src={article.image} alt="" />
              <small>{article.category}</small>
              <h4>{article.title}</h4>
              <p>{article.description}</p>
              <strong>prix {article.price} €</strong>
              <button onClick={() => addTocart()}>
                {"ajouter au panier"}
                <AddShoppingCartIcon className="add-cart" />
              </button>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default CardDetail;
