import Accordion from "../components/Accordion";
import { useParams } from "react-router-dom";
import data from "@data"; // Utilise l'alias défini dans vite.config.js
import NotFound from "./NotFound";
import Carousel from "../components/Carousel";
import React from "react";
import Rating from "../components/Rating";
function Logement() {
  const { id } = useParams();

  // Recherche du logement correspondant à l'ID
  const logement = data.find((item) => item.id.toString() === id);

  //a corriger
  if (!logement) {
    return <NotFound />;
  }

  return (
    <div className="logement">
      <div className="image_logement">
        <Carousel logement={logement} />
      </div>
      <div className="info">
        <div className="title">
          <h1 className="title-logement">{logement.title}</h1>
          <p className="location">{logement.location}</p>
          <div className="filter">
            <ul className="logement-tags">
              {logement.tags.map((tag, index) => (
                <li className="tags" key={index}>
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="properties">
          <div className="profile_properties">
            <h2>{logement.host.name}</h2>
            <img
              src={logement.host.picture}
              alt="img de properties"
              className="img_properties"
            />
          </div>
          <div className="rating">
            <Rating rating={parseFloat(logement.rating)} />
          </div>
        </div>
      </div>
      <div className="accordion-logement">
        <Accordion title="Description">
          <p>{logement.description}</p>
        </Accordion>
        <Accordion title="Équipements">
          <ul>
            {logement.equipments.map((equipement, index) => (
              <li key={index}>{equipement}</li>
            ))}
          </ul>
        </Accordion>
      </div>
    </div>
  );
}

export default Logement;
