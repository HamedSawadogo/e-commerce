import React from "react";
import { NavLink } from "react-router-dom";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
const Navbar = () => {
  return (
    <nav className="navigation">
      <ul className="items">
        <NavLink to={"/"}>Accueil</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>
        <NavLink to={"/props"}>A props</NavLink>
        <NavLink to={"/props"}>
          <HelpOutlineIcon />
          Aide
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
