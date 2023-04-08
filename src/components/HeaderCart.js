import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const HeaderCart = ({ setSearchValue }) => {
  const cart = useSelector((state) => state.cart);
  const cartLength = cart.length > 0 ? cart.length : 0;
  const navigate = useNavigate();
  return (
    <div className="header-container">
      <ul className="bloc-items">
        <div className="search">
          <SearchIcon className="icon" />
          <input
            type="search"
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder=" rechercher un article"
          />
          <button className="search-btn">Rechercher</button>
        </div>
        <div className="cart" onClick={() => navigate("/cart")}>
          <span>{cartLength}</span>
          <ShoppingCartIcon className="cart-icon" />
        </div>
      </ul>
    </div>
  );
};

export default HeaderCart;
