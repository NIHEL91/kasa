import React from "react";

const Owner = ({image , title  }) => {
  return (
    <div className="owner">
      {image && <img src={image} alt={title} className="owner-image" />}
      <h3 className="title-owner">Alexandre
Dumas</h3>
      <div className="avis">

      </div>
    </div>
  );
};

export default Owner;
