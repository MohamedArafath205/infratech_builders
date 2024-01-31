import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image1 from "../../assets/hero/hero1.jpg";
import Image2 from "../../assets/hero/herotext1.jpg";
import Image3 from "../../assets/hero/slider-image2.jpg";
import Image4 from "../../assets/hero/herotext2.jpg";
import Image5 from  "../../assets/hero/paintingslider.jpg";
import Image6 from "../../assets/hero/herotext3.jpg";
import Image7 from "../../assets/hero/renoslider.jpg";
import Image8 from "../../assets/hero/herotext4.jpg";
import Image9 from "../../assets/hero/turfhomehero.jpg";
import Image10 from "../../assets/hero/herotext5.jpg";

const ImageList = [
 {
    id: 1,
    img: Image1,
  }, 
 {
    id: 2,
    img: Image2,
  },
  
 {
    id: 3,
    img: Image3,
  }, 
  {
    id: 4,
    img: Image4,
  },
  {
    id: 5,
    img: Image5,
  },
  {
    id: 6,
    img: Image6,
  },
  {
    id: 7,
    img: Image7,
  },
  {
    id: 8,
    img: Image8,
  },
  {
    id: 9,
    img: Image9,
  },
  {
    id: 10,
    img: Image10,
  },
];  

const Hero = ({ handleOrderPopup }) => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    
    <div className="relative overflow-hidden flex justify-center items-center dark:text-white duration-200">
      {/* background pattern */}
      <div className="h-full w-full bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]"></div>
      {/* hero section */}
      <div className="container">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div key={data.id}>
              <div className="flex items-center justify-center">
                {/* image section */}
                <div className="mt-24 flex items-center justify-center  ">
                  <div className="md:h-full md:w-full h-[220px] w-[310px]">
                    <img
                      src={data.img}
                      alt=""
                      className="md:h-[600px] md:w-[1400px] h-[220px] w-[330px] object-cover object-center "
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;