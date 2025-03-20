import React from "react";
import logo from "../assets/images/LOGO.png";
import { Link } from "react-router-dom";
import "../assets/style/components/navbar.scss";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__header">
        <div className="logo__img">
          <img src={logo} alt="Logo de Kasa" className="logo" />
        </div>

        <div className="navbar__links">
          <ul>
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/about">A propos</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
