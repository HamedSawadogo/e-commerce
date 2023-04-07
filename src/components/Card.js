import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ article }) => {
  const navigate = useNavigate();
  const handleDetails = () => {
    navigate(`/Details/${article.id}`);
  };

  return (
    <div className="card" onClick={() => handleDetails()}>
      <img src={article.image} alt="" />
      <p>{article.title}</p>
      <strong>prix {article.price} €</strong>
    </div>
  );
};

export default Card;
