import React, { useState } from 'react';
import OrderPopup from "./Popup";
import Aboutushero from './components/Aboutus/Aboutushero'
import Aboutusdetails from './components/Aboutus/Aboutusdetails'
import OurRenovationservices from './components/Renovationservices/OurRenovationservices'
import Aboutotherservices from './components/Aboutus/Aboutotherservices'
import Exploredesigns from './components/Exploredesigns/Exploredesigns'
import Callusbanner from './components/Callusbanner/Callusbanner';


const Aboutus = () => {
  const [showOrderPopup, setShowOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setShowOrderPopup(!showOrderPopup); 
  };
  return (
        <div>
          <Aboutushero
                       handleOrderPopup={handleOrderPopup}/>
          <Aboutusdetails
          />
          <Aboutotherservices
                                 handleOrderPopup={handleOrderPopup}/>
          <OrderPopup orderPopup={showOrderPopup} setOrderPopup={setShowOrderPopup} />
<Callusbanner/>
          </div>
  )
}

export default Aboutus 