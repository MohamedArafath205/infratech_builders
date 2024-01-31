import React, { useState } from 'react';
import Constructionhero from './components/Constructionhero/Constructionhero'
import Constructionweprovidetext from './components/Constructionweprovide/Constructionweprovidetext'
import Constructionweprovide from './components/Constructionweprovide/Constructionweprovide'
import Constructionotherservices from './components/Constructionotherservices/Constructionotherservices'
import Exploredesigns from './components/Exploredesigns/Exploredesigns'
import Callusbanner from './components/Callusbanner/Callusbanner';
import Banner1 from './assets/Hero/comm.jpg';
import Banner2 from './assets/Hero/residen.jpg';
import Banner3 from './assets/Hero/infra.jpg';
import OrderPopup from "./Popup";




const Construction = () => {
  const [showOrderPopup, setShowOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setShowOrderPopup(!showOrderPopup);
  };
  return (
        <div>
          <Constructionhero
          handleOrderPopup={handleOrderPopup}/>
          <Constructionweprovidetext/>
          <Constructionweprovide
               handleOrderPopup={handleOrderPopup}
               img={Banner2}
        title="Residential Construction"
        quotes="“Crafting Dream Homes with Expertise”"
        description="Embark on the journey of building your dream home in chennai with residential construction services tailored to your vision. From bathroom renovations to complete home constructions, collaborate with skilled contractors and builders near you. Create a haven that mirrors your style, combining functionality and aesthetics seamlessly."
      />
      <Constructionweprovide
                handleOrderPopup={handleOrderPopup}
                reverse={true}
        img={Banner1}
        title="Commercial Construction"
        quotes="“Transforming Spaces for Business Success”"
        description="Discover the power of impactful commercial construction in chennai, where innovation meets functionality. Whether it's office spaces, restaurants, or retail outlets, engage with Infratech builders to shape environments that foster productivity and customer engagement. Elevate your business with structures designed for success."

      />
      <Constructionweprovide
                handleOrderPopup={handleOrderPopup}
                img={Banner3}
        title="Infrastructure Construction"
        quotes="“Shaping Tomorrow's Landscape”"
        description="Infrastructure construction plays a vital role in shaping the future of communities. Engage with dedicated contractors and builders to contribute to the development of apartments and individual home. Participate in projects that enhance connectivity, accessibility, and overall quality of life. Join the efforts to build the foundation for a sustainable and interconnected future"
      />
            <OrderPopup orderPopup={showOrderPopup} setOrderPopup={setShowOrderPopup} />
          <Constructionotherservices/>
          <Exploredesigns/>
          <Callusbanner/>
          
          </div>
  )
}

export default Construction
