import React, { useState } from 'react';
import OrderPopup from "./Popup";
import Modularkitchenhero from './components/Modularkitchenhero/Modularkitchenhero'
import Modularkitchenweprovidetext from './components/Modularkitchenweprovide/Modularkitchenweprovidetext'
import Modularkitchenweprovide from './components/Modularkitchenweprovide/Modularkitchenweprovide'
import Modularotherservices from './components/Modularkitchenweprovide/Modularotherservices'
import Exploredesigns from './components/Exploredesigns/Exploredesigns'
import { Link } from "react-router-dom";
import Callusbanner from './components/Callusbanner/Callusbanner';



const Modularkitchen = () => {
  const [showOrderPopup, setShowOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setShowOrderPopup(!showOrderPopup);
  };
  return (
        <div>
          <Modularkitchenhero
                 handleOrderPopup={handleOrderPopup}/>
          <Modularkitchenweprovidetext/>
          <Modularkitchenweprovide 
                 handleOrderPopup={handleOrderPopup}/>
                       <OrderPopup orderPopup={showOrderPopup} setOrderPopup={setShowOrderPopup} />
          <Exploredesigns/>
          <Modularotherservices/>
          <Callusbanner/>
          </div>
  )
}

export default Modularkitchen