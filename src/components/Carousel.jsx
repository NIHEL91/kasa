import React, { useState } from "react";
import "../assets/style/components/carousel.scss";
const Carousel = ({logement}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    //const logement = data[0]; // Prend le premier logement du JSON
    //console.log(logement);
    const images = logement.pictures; // Place `cover` en premier
  //const images = [logement.cover].concat(logement.pictures);
  const multImages = images.length > 2; // Vérifie si plusieurs images existent


  const nextImage = () =>
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);

  const prevImage = () =>
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);

  let prevButton = null;
  let nextButton = null;
  let counter = null;

  
  if (multImages === true) {
    prevButton = <button onClick={prevImage} className="prev">❮</button>;
    nextButton = <button onClick={nextImage} className="next">❯</button>;
    counter = <div className="carousel-counter">{currentIndex + 1} / {images.length}</div>;
  }

  return (
    <div className="carousel">
      {prevButton}
      <img src={images[currentIndex]} alt="carousel" className="carousel-image" />
      {nextButton}
      {counter}
    </div>
  );

};

export default Carousel;
