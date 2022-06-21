import React, {useState, useEffect} from 'react';
import montre1 from './image/montre1.jpg';


const Montres =() => {
  const [Montres, setMontres ] = useState([
    
  ]);
  useEffect(() => {
    fetch("http://localhost:4000/montres")
      .then((res) => res.json())
      .then((Montres) => {
        setMontres(Montres);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className='divmontre'> 
    <ul>
      {Montres.map((Montres) => (
        <li key={Montres.id}><img src= {montre1} alt=""></img> {Montres.Nom} {Montres.Image} {Montres.Marque} {Montres.Prix}</li>
      ))}
    </ul>
    </div>
  );
};


export default Montres