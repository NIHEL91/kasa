import React from 'react';
import bkg from "../assets/images/about.png";
import Accordion from '../components/Accordion';
function About() {
    return (
<div className="about">
      <div className="about-img">
        <img src={bkg} alt="img de propos" className="img_background" />
      </div>
      <div className="accordion-about">
        <Accordion title="Fiabilité" content='Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.' />
        <Accordion title="Respect" content='La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'/>
        <Accordion title="Service" content='Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. Nhésitez pas à nous contacter si vous avez la moindre question.'/>
        <Accordion title="Sécurité" content='La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à lhôte quau locataire cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes' />
      </div>

</div>
  );}

  export default About;
