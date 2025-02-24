// Dans Home.jsx (dans le dossier /pages)
import React from 'react';
import Navbar from '../components/Navbar'; // Remarque le chemin relatif
import Footer from '../components/Footer';
function NotFound() {
  return (
    <div>
      <div className='notFound'>
          <h1 className="not-found-text">404</h1>
          <p className="notfound">Oups! La page que vous demandez n'existe pas.</p>
      </div>
    </div>
  );
}

export default NotFound;
