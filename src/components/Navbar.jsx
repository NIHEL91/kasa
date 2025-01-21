import React from "react";
import logo from './assets/images/LOGO.png'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div>
        <img src={logo} alt="Logo de Kasa"   className="logo"/>
      </div>
      <ul className="nav-links">
        <li><a href="#">Accueil</a></li>
        <li><a href="#">À propos</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
