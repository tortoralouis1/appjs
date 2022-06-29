/* eslint-disable react/jsx-key */
import React, {useState, useEffect} from 'react';
import event1 from './image/event1.jpg';


const Montres =() => {
  const [Montres, setMontres ] = useState([
    
  ]);
  const [query, setQuery] = useState("")
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
    <>
    <div className="divmontre">
        <input
          placeholder="Entrez le nom d'un évenement"
          onChange={(event) => setQuery(event.target.value)}
        />
        <ul className="display">
          {Montres.filter((Montres) => {
            if (query === "") {
              return Montres;
            } else if (
              Montres.Nom.toLowerCase().includes(query.toLowerCase())
            ) {
              return Montres;
            }
            return null;
          }).map((Montres) => (
            <div className="card-event">
              <div>
                <li key={Montres.id}>
                  <img src={event1} alt=""></img>
                </li>
              </div>
              <div>
                <li>
                  <h4 className="name">{Montres.Nom}</h4>
                </li>
                <li>
                  <h4 className="location">{Montres.Lieu}</h4>
                </li>
                <li>
                  <p className="desc">{Montres.Description}</p>
                </li>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};


export default Montres
