import React from "react";

const Cards = ({ image, title }) => {
  const cardStyle = {
    background: `linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(255, 255, 255, 0)), url(${image})`,
    backgroundSize: "cover", // 🔹 Ajoute ces propriétés ici !
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="card">
      <div className="card-image" style={cardStyle}>
        <h3 className="title-card">{title}</h3>
      </div>
    </div>
  );
};

export default Cards;
