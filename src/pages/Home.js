import React from "react";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";
import axios from "axios";
import { useState, useEffect } from "react";
import HeaderCart from "../components/HeaderCart";
import Loader from "../components/loader/Loader";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:3100/articles")
      .then((res) => setArticles(res.data));
    setLoading(false);
  }, []);
  console.log(articles);

  return (
    <>
      <Navbar />
      <HeaderCart setSearchValue={setSearchValue} />
      {loading ? (
        <Loader />
      ) : (
        <Cards articles={articles} search={searchValue} />
      )}
    </>
  );
};

export default Home;
