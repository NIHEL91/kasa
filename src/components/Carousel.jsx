import React, { useState } from "react";
import data from '@data'; // Utilise l'alias défini dans vite.config.js
import "../assets/style/components/carousel.scss";
const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const logement = data[0]; // Prend le premier logement du JSON
    console.log(logement);
    const images = [logement.cover, ...logement.pictures]; // Place `cover` en premier
  
    const nextImage = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);

    };
  
    const prevImage = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
  
  

  return (
    <div className="carousel">
      <button onClick={prevImage} className="prev">❮</button>
      <img src={images[currentIndex]} alt=" carousel" className="carousel-image" />
      <button onClick={nextImage} className="next">❯</button>
    </div>
  );
};

export default Carousel;
