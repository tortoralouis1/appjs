import React from 'react'
import montre1 from './image/montre1.jpg';

const Home =() => {
  return (
    <div className='divhome'>
      <h1 className='titleprincipal'>Bienvenue sur notre site de référencement <br/> des événements horlogers </h1>
      <img className='imgprincipal' src={montre1} alt="imageprincipale"></img>
      <h3> Explorez notre Sélection d&apos;évenements autour de montres prestigieuses de haute précision. <br/> Nous proposons un vaste choix d&apos;évenements pour convenir à tous les goûts et toutes les envies. <br/> Découvrer l&apos;univers de l&apos;horlogerie à votre façon </h3>
    </div>
  );
};

export default Home