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
    <div className='divmontre'> 
    <input placeholder="Enter Event Name" onChange={event => setQuery(event.target.value)}/>
    <ul>
    {Montres.filter(Montres => {
    if (query === '') {
      return Montres;
    } else if (Montres.Nom.toLowerCase().includes(query.toLowerCase())) {
      return Montres;
    }
  }).map((Montres) => (
        <div>
          <li key={Montres.id}><img src= {event1} alt=""></img> <h4> {Montres.Nom} </h4></li>
          <li> <h4> {Montres.Lieu} </h4> </li>
          <li> <p>{Montres.Description} </p> </li>
        </div>
      ))}
    </ul>
    </div>

    </>
  );
};


export default Montres