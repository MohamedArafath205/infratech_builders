import React, { useState } from 'react';
import OrderPopup from "./Popup";
import Bedroomhero from './components/Bedroom/Bedroomhero'
import Bedroomweprovidetext from './components/Bedroom/Bedroomweprovidetext'
import Bedroomweprovide from './components/Bedroom/Bedroomweprovide'
import Modularotherservices from './components/Modularkitchenweprovide/Modularotherservices'
import Exploredesigns from './components/Exploredesigns/Exploredesigns'
import Banner1 from './assets/Hero/bed1.jpg';
import Banner2 from './assets/Hero/bed2.jpg';
import Banner3 from './assets/Hero/bed3.jpg';
import Callusbanner from './components/Callusbanner/Callusbanner';

const Bedroom = () => {
  const [showOrderPopup, setShowOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setShowOrderPopup(!showOrderPopup);
  };
  return (
        <div>
          <Bedroomhero
                    handleOrderPopup={handleOrderPopup}/>
          <Bedroomweprovide
                  handleOrderPopup={handleOrderPopup}
        img={Banner1}
        description="Step into a realm of personalized luxury and comfort with Infratech Builders, your ultimate destination for Bedroom Interior Designers in Chennai. At Infratech, we understand that your bedroom is a sanctuary, a reflection of your style, personality, and the epitome of relaxation. Our team of expert designers, architects, and craftsmen collaborate seamlessly to bring your dream bedroom to life."
      />
      <Bedroomweprovide
                  handleOrderPopup={handleOrderPopup}
        reverse={true}
        img={Banner2}
        description="Infratech Builders excels in crafting bespoke bedroom interiors that cater to your unique preferences and lifestyle. From contemporary chic to timeless elegance, our designs are tailored to create a harmonious blend of aesthetics and functionality. We pay meticulous attention to every detail, from the layout to color schemes, lighting, and furniture selection, ensuring a space that truly resonates with your vision."
      />
                <Bedroomweprovide
                  handleOrderPopup={handleOrderPopup}
        img={Banner3}
        description="Utilizing cutting-edge techniques and premium materials, we guarantee durability, precision, and a touch of sophistication in every bedroom project. Whether you desire a cozy retreat, a modern haven, or a luxurious escape, Infratech Builders transforms your bedroom into a personalized oasis that reflects your taste and enhances your daily living experience. Choose Infratech for an unparalleled bedroom interior design experience in Chennai, where style meets comfort in perfect harmony."
      />
              <OrderPopup orderPopup={showOrderPopup} setOrderPopup={setShowOrderPopup} />

          <Exploredesigns/>
          <Modularotherservices/>
          <Callusbanner/>
          </div>
  )
}

export default Bedroom