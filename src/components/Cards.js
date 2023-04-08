import React from "react";
import Card from "./Card";
const Cards = ({ articles, search }) => {
  return (
    <div className="cards-containers">
      {articles
        .filter((article) =>
          article.title.toUpperCase().includes(search.toUpperCase())
        )
        .map((article) => (
          <Card key={article.id} article={article} />
        ))}
    </div>
  );
};

export default Cards;
