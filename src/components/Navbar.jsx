import React from "react";
import logo from "../assets/images/LOGO.png";
const Navbar = () => {
  return (
<nav className="navbar">
  <div className="navbar__header">
    <div className="navbar__img">
      <img src={logo} alt="Logo de Kasa" className="logo" />
    </div>

    <div className="navbar__links">
      <a href="#accueil">Accueil</a>
      <a href="#apropos">À propos</a>
    </div>
  </div>

</nav>
  );
};

export default Navbar;
