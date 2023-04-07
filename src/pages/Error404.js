import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="error-page">
      <h2>Oups une erreur est survenue</h2>
      <img
        src={`https://raw.githubusercontent.com/OpenClassrooms-Student-Center/7150606-React-intermediaire/b418cdbe77596280ee54f2571542bdba9b4aeb53/src/assets/404.svg`}
        alt="erreur 404"
      />
      <Link to={"/"}>Accuiel</Link>
    </div>
  );
};

export default Error404;
