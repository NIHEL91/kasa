// Dans Home.jsx (dans le dossier /pages)
import React from "react";
import Cards from "../components/Cards";
import img from "../assets/images/maskGroup.png";
import { Link } from "react-router-dom";
import "../assets/style/App.scss";
import data from "@data"; // Utilise l'alias défini dans vite.config.js

function Home() {
  
  return (
    <div className="home">
      <div className="navbar__img">
        <img src={img} alt="img d'accueil" className="img_navbar" />
        <div className="text">Chez vous, partout et ailleurs</div>
      </div>
      <div className="big-card">
        <div className="card-container">
          {data.map((card) => (
            <Link
              key={card.id}
              to={`/logement/${card.id}`}
              className="card-link"
            >
              <Cards title={card.title} image={card.cover} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
