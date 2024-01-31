import React, { useState } from 'react';
import OrderPopup from "./Popup";
import Diningroomhero from './components/Diningroomhero/Diningroomhero'
import Diningroomweprovidetext from './components/Diningroomweprovide/Diningroomweprovidetext'
import Diningroomweprovide from './components/Diningroomweprovide/Diningroomweprovide'
import Modularotherservices from './components/Modularkitchenweprovide/Modularotherservices'
import Exploredesigns from './components/Exploredesigns/Exploredesigns'
import Callusbanner from './components/Callusbanner/Callusbanner';


const Diningroom = () => {
  const [showOrderPopup, setShowOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setShowOrderPopup(!showOrderPopup);
  };
  return (
        <div>
          <Diningroomhero
                    handleOrderPopup={handleOrderPopup}/>
          <Diningroomweprovidetext/>
          <Diningroomweprovide
                    handleOrderPopup={handleOrderPopup}/>
  <OrderPopup orderPopup={showOrderPopup} setOrderPopup={setShowOrderPopup} />

          <Exploredesigns/>
          <Modularotherservices/>
          <Callusbanner/>
          </div>
  )
}

export default Diningroom 