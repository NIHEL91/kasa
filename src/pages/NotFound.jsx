// Dans Home.jsx (dans le dossier /pages)
import React from 'react';
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <div className='notFound'>
          <h1 className="not-found-text">404</h1>
          <p className="notfound">Oups! La page que vous demandez n'existe pas.</p>
          <Link className='lien' to="/">Retourner sur la page d’accueil</Link>

      </div>
    </div>
  );
}

export default NotFound;
