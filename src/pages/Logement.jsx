// Dans Home.jsx (dans le dossier /pages)
import React from 'react';
import Navbar from '../components/Navbar'; // Remarque le chemin relatif
import Footer from '../components/Footer';
import background from "../assets/images/Background.png";
import Owner from '../components/owner';
import Accordion from '../components/Accordion';
function Logement() {
  return (
    <div>
      <Navbar /> 
            <div className="image_logement">
              <img src={background} alt="img de logement" className="img_logement" />
              <div className="text_logement">Cozy loft on the Canal Saint-Martin</div>
              <p className='location'>Paris, Île-de-France</p>
              <ul>
                <li>Cozy</li>
                <li>Canal</li>
                <li>Paris 10</li>
              </ul>
            </div>

      <Owner />
      <Accordion />
      <Footer /> 
    </div>
  );
}

export default Logement;
