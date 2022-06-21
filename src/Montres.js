import React, {useState, useEffect} from 'react'
import Montreslist from './Montreslist';


const Montres =() => {
  const [Montres ] = useState([
    
  ]);
  useEffect(() => {
    console.log ('use effect');
  }, []);
  return (
    <div className="montres"> 
      <Montreslist Montres={Montres} title="toutes les montres"/>
    </div>
  );
};


export default Montres