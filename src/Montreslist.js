import React from 'react'

const Montreslist =(props) => {
  const montres = props.montres;

  console.log(props)

  return (
    <div className="Montreslist">
        {montres.map((Montres) => (
            <div className='montrespreview' key={montres.id}>
                <h2> {montres.Marque} </h2>
                <p> Prix : {montres.Prix} </p>
            </div> 
        ))}
    </div>
  );
};

export default Montreslist