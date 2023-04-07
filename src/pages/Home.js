import React from "react";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";
import axios from "axios";
import { useState, useEffect } from "react";
import { Loader } from "../components/CardDetail";
import HeaderCart from "../components/HeaderCart";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("http://localhost:3100/articles")
      .then((res) => setArticles(res.data));
    setLoading(false);
  }, []);
  {
    console.log(articles);
  }
  return (
    <>
      <Navbar />
      <HeaderCart />
      {loading ? <Loader /> : <Cards articles={articles} />}
    </>
  );
};

export default Home;
