import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CardDetail from "./components/CardDetail";
import { Provider } from "react-redux";
import store from "./app/store";
import Error404 from "./pages/Error404";
import Cart from "./pages/cart";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/cart" exact element={<Cart />} />
        <Route path="/Details/:id" exact element={<CardDetail />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
