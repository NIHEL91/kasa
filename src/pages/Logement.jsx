import Accordion from '../components/Accordion';
import { useParams } from 'react-router-dom';
import data from '@data'; // Utilise l'alias défini dans vite.config.js
import NotFound from './NotFound';
import Carousel from '../components/Carousel';
function Logement() {
  const { id } = useParams();

  // Recherche du logement correspondant à l'ID
  const logement = data.find(item => item.id.toString() === id);

//a corriger
  if (!logement) {  
     return<NotFound />
  }

  return (
    <div  className='logement'>
      <div className="image_logement">
<Carousel/>
      <div className='next'>

        </div>
        <div className='previous'>

        </div>
        <div className='log'>
            <h1 className='title-logement'>{logement.title}</h1>
            <div className='properties'>
              <h2>{logement.host.name}</h2> 
              <img src={logement.host.picture} alt="img de properties" className="img_properties" />
            </div>

        </div>

        <p className='location'>{logement.location}</p>
        <ul className='logement-tags'>
          {logement.tags.map((tag, index) => (
          <li className='tags' key={index}>{tag}</li>
          ))}
        </ul>
      </div>
      <div className="accordion-logement">
        <Accordion title="Description" content={logement.description} />
        <Accordion title="Équipements" content={logement.equipments.join(', ')} />
      </div>
      
    </div>
  );
}

export default Logement;
