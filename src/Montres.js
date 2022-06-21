import React, {useState, useEffect} from 'react'


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
    <ul>
      {Montres.map((Montres) => (
        <li key={Montres.id}>{Montres.Marque} {Montres.Prix}</li>
      ))}
    </ul>
  );
};


export default Montres