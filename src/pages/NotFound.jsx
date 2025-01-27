// Dans Home.jsx (dans le dossier /pages)
import React from 'react';
import Navbar from '../components/Navbar'; // Remarque le chemin relatif
import Footer from '../components/Footer';
function NotFound() {
  return (
    <div>
      <Navbar /> 
      <div className='notFound'>
          <h1 className="not-found-text">404</h1>
      </div>
      <Footer /> 
    </div>
  );
}

export default NotFound;
