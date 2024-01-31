import React, { useState } from 'react';
import OrderPopup from "./Popup";
import ToiletBathroomhero from './components/ToiletBathroom/ToiletBathroomhero'
import ToiletBathroomweprovidetext from './components/ToiletBathroom/ToiletBathroomweprovidetext'
import ToiletBathroomweprovide from './components/ToiletBathroom/ToiletBathroomweprovide'
import Modularotherservices from './components/Modularkitchenweprovide/Modularotherservices'
import Exploredesigns from './components/Exploredesigns/Exploredesigns'
import Banner1 from './assets/Hero/toilet1.jpg';
import Banner2 from './assets/Hero/toilet2.jpg';
import Callusbanner from './components/Callusbanner/Callusbanner';

const ToiletBathroom = () => {
  const [showOrderPopup, setShowOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setShowOrderPopup(!showOrderPopup);
  };
  return (
        <div>
          <ToiletBathroomhero
           handleOrderPopup={handleOrderPopup}/>
          <ToiletBathroomweprovide
         handleOrderPopup={handleOrderPopup}
        img={Banner1}
        description="Discover unparalleled Toilet and Bathroom Interior Designing Services with us. As Chennai's premier designers, we specialize in transforming bathrooms into beautifully designed sanctuaries. Our comprehensive services encompass customized redesigns, focusing on aesthetic appeal, safety enhancements, and improved functionality. Trust us for an exceptional design and renovation experience."
      />
      <ToiletBathroomweprovide
         handleOrderPopup={handleOrderPopup}
        reverse={true}
        img={Banner2}
        description="From cutting-edge Bathroom Tiles Renovation to efficient concrete floor breaking, our industry professionals utilize advanced tools for exceptional results. At Infratech Builders, we prioritize creating harmonious and inviting bathroom spaces that align with your style and enhance daily routines. With attention to detail and expertise, our seamless transformations exceed expectations, ensuring your toilet and bathroom become functional and aesthetically pleasing havens within your home."

      />
        <OrderPopup orderPopup={showOrderPopup} setOrderPopup={setShowOrderPopup} />

          <Exploredesigns/>
          <Modularotherservices/>
          <Callusbanner/>
          </div>
  )
}

export default ToiletBathroom