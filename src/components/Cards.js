import React from "react";
import Card from "./Card";
const Cards = ({ articles }) => {
  return (
    <div className="cards-containers">
      {articles.map((article) => (
        <Card key={article.id} article={article} />
      ))}
    </div>
  );
};

export default Cards;
