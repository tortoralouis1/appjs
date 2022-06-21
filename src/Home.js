import React from 'react'
import montre1 from './image/montre1.jpg';

const Home =() => {
  return (
    <div className='divhome'>
      <h1 className='titleprincipal'>Bienvenue sur notre site de montre de luxe</h1>
      <img className='imgprincipal' src={montre1} alt="imageprincipale"></img>
      <h3>  Explorez notre collection de montres prestigieuses de haute précision. Nous proposons un vaste choix de modèles de montres Professionnelles et Classiques pour convenir à tous les poignets. Découvrez notre large sélection de montres : une combinaison parfaite de style et de fonctionnalité.</h3>
    </div>
  );
};

export default Home