import React, { useState } from 'react';
import OrderPopup from "./Popup";
import Livingroomhallhero from './components/Livingroomhallhero/Livingroomhallhero'
import Livingroomhallweprovidetext from './components/Livingroomhallweprovide/Livingroomhallweprovidetext'
import Livingroomhallweprovide from './components/Livingroomhallweprovide/Livingroomhallweprovide'
import Modularotherservices from './components/Modularkitchenweprovide/Modularotherservices'
import Callusbanner from './components/Callusbanner/Callusbanner';

import Livingroomhallweprovide2 from './components/Livingroomhallweprovide/Livingroomhallweprovide2'
import Constructionotherservices from './components/Constructionotherservices/Constructionotherservices'
import Exploredesigns from './components/Exploredesigns/Exploredesigns'


const Livingroomhall = () => {
  const [showOrderPopup, setShowOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setShowOrderPopup(!showOrderPopup);
  };
  return (
        <div>
          <Livingroomhallhero
          handleOrderPopup={handleOrderPopup}/>
          <Livingroomhallweprovidetext/>
          <Livingroomhallweprovide
          handleOrderPopup={handleOrderPopup}/>
                                 <OrderPopup orderPopup={showOrderPopup} setOrderPopup={setShowOrderPopup} />

          <Exploredesigns/>
          
          <Modularotherservices/>
          <Callusbanner/>
          </div>
  )
}

export default Livingroomhall