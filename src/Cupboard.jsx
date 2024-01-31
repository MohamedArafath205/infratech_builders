import React, { useState } from 'react';
import OrderPopup from "./Popup";
import Cupboardhero from './components/Cupboardhero/Cupboardhero'
import Cupboardweprovidetext from './components/Cupboardweprovide/Cupboardweprovidetext'
import Cupboardweprovide from './components/Cupboardweprovide/Cupboardweprovide'
import Modularotherservices from './components/Modularkitchenweprovide/Modularotherservices'
import Exploredesigns from './components/Exploredesigns/Exploredesigns'
import Callusbanner from './components/Callusbanner/Callusbanner';



const Cupboard = () => {
  const [showOrderPopup, setShowOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setShowOrderPopup(!showOrderPopup);
  };
  return (
        <div>
          <Cupboardhero
          handleOrderPopup={handleOrderPopup}/>
          <Cupboardweprovidetext/>
          <Cupboardweprovide
          handleOrderPopup={handleOrderPopup}/>
    <OrderPopup orderPopup={showOrderPopup} setOrderPopup={setShowOrderPopup} />
          <Exploredesigns/>
          <Modularotherservices/>
          <Callusbanner/>
          </div>
  )
}

export default Cupboard 