import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";

const ProductsData = [
  {
    id: 1,
    title: "Construction",
    text1: "Private home construction",
    text2: "Duplex home construction",
    text3: "Residential building",
    text4: "Commercial Building",
    text5: "Fencing",
    link: "/construction",
  },
  {
    id: 2,
    title: "Interior Designing",
    text1: "Country house design",
    text2: "Dining room",
    text3: "Modern kitchen",
    text4: "Contemporary home interior",
    text5: "Modern mansion interior",
    link: "/homeinteriors",
  },
  {
    id: 3,
    title: "Turf Construction",
    text1: "Multi-sport turf",
    text2: "Cricket turf",
    text3: "Football turf",
    text4: "Badminton turf",
    text5: "Volleyball turf",
    link: "/multi-turf-construction",
  },
  {
    id: 4,
    title: "Renovation",
    text1: "House Remodeling",
    text2: "Leakage Repair",
    text3: "Wall dampness treatment",
    text4: "Ceiling/Roof leakage fix",
    text5: "Wet wall treatment",
    link: "/renovation-services",
  },
  {
    id: 5,
    title: "Painting services",
    text1: "Exterior house painting",
    text2: "Interior painting",
    text3: "Wall painting",
    text4: "Furniture painting",
    text5: "Residential house painting",
    link: "/painting-services",
  },
];


const Herocard = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 0,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        <div className="flex items-center justify-center mb-8 ">
          <div className=" py-4 max-w-[1200px] mx-auto">
            {/* Header section */}
            <h1 className="text-center text-3xl text-primary font-bold">
              SERVICES WE OFFER
            </h1>
            <p className="text-center text-bold py-4 text-black">
              Explore meticulously curated designs for Chennai homes, tailored to each room with unique style. From inviting bedrooms to efficient kitchens and chic living spaces, discover inspirations that suit every preference and lifestyle. Elevate your abode with our collections, seamlessly blending style and practicality for a personalized ambiance reflecting the rhythm of your life.
            </p>
          </div>
        </div>
      </div>
      <div>
        <Slider {...settings}>
          {ProductsData.map((data) => (
            <div key={data.id} className={`my-6`}>
              <Link to={data.link} className="card-link">
                <div className={`flex flex-col shadow-md hover:scale-105 gap-4 rounded-xl py-8 md:mx-10 mx-14 bg-primary/40 relative`}>
                  <div className="bg-gradient-to-r from-primary to-secondary px-4 py-2 rounded-md">
                    <h1 className="text-xl text-center font-bold text-black/80 dark:text-light">
                      {data.title}
                    </h1>
                  </div>
                  <div className="space-y-3">
                    {[data.text1, data.text2, data.text3, data.text4, data.text5].map((text, index) => (
                      <p key={index} className="text-sm text-center text-gray-600 flex items-center">
                        <FaStar className=" ml-3" />
                        {text}
                      </p>
                    ))}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Herocard;