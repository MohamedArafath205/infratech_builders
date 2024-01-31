import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Construction from './Construction';
import Callusbanner from './components/Callusbanner/Callusbanner';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Homeinteriors from './Homeinteriors';
import Modularkitchen from './Modularkitchen';
import Livingroomhall from './Livingroomhall';
import Falseceiling from './Falseceiling';
import Cupboard from './Cupboard';
import Diningroom from './Diningroom';
import ToiletBathroom from './ToiletBathroom';
import Tvshowcase from './Tvshowcase';
import Studyroom from './Studyroom';
import Poojaroom from './Poojaroom';
import Bedroom from './Bedroom';
import Turfconstruction from './Turfconstruction';
import Paintingservices from './Paintingservices';
import Renovationservices from './Renovationservices';
import Aboutus from './Aboutus';
import Contactus from './Contactus';
import ScrollToTop from './ScrollToTop';
import OrderPopup from './Popup';

const App = () => {
  const [showOrderPopup, setShowOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setShowOrderPopup(!showOrderPopup);
  };

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar handleOrderPopup={handleOrderPopup} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/construction" element={<Construction />} />
          <Route path="/homeinteriors" element={<Homeinteriors />} />
          <Route path="/modularkitchen" element={<Modularkitchen />} />
          <Route path="/livingroomhall" element={<Livingroomhall />} />
          <Route path="/falseceiling" element={<Falseceiling />} />
          <Route path="/cupboard-Wardrobes" element={<Cupboard />} />
          <Route path="/diningroom" element={<Diningroom />} />
          <Route path="/toilet-bathroom" element={<ToiletBathroom />} />
          <Route path="/tv-show-case" element={<Tvshowcase />} />
          <Route path="/study-room" element={<Studyroom />} />
          <Route path="/pooja-room" element={<Poojaroom />} />
          <Route path="/bedroom" element={<Bedroom />} />
          <Route path="/multi-turf-construction" element={<Turfconstruction />} />
          <Route path="/painting-services" element={<Paintingservices />} />
          <Route path="/renovation-services" element={<Renovationservices />} />
          <Route path="/about-us" element={<Aboutus />} />       
          <Route path="/contact-us" element={<Contactus />} />  
          </Routes>
        <Footer />
        <OrderPopup orderPopup={showOrderPopup} setOrderPopup={setShowOrderPopup} /> {/* Important */}
      </BrowserRouter>
    </>
  );
};

export default App;