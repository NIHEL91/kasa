import React from "react";

const Cards = ({image , title  }) => {
  return (
    <div className="card">
      {image && <img src={image} alt={title} className="card-image" />}
      <h3 className="title-card">{title}</h3>
    </div>
  );
};

export default Cards;
