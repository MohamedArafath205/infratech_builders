import React from 'react';
import Img1 from "../../assets/hero/construction.png";
import Img2 from "../../assets/hero/dressing-table.png";
import Img3 from "../../assets/hero/kitchen.png";
import Img4 from "../../assets/hero/interior-design.png";
import Img5 from "../../assets/hero/weather coating.png";
import Img6 from "../../assets/hero/painting.png";
import Img7 from "../../assets/hero/plumber.png";
import Img8 from "../../assets/hero/insulating.png";

const OurRenovationservices = () => {
  const contact_info = [
    {
      img: Img1,
      text: "Construction",
    },
    {
      img: Img2,
      text: "Luxury design",
    },
    {
      img: Img3,
      text: "Modular kitchen",
    },
    {
      img: Img4,
      text: "Interior design",
    },
  ];

  const contact_info2 = [
    {
      img: Img5,
      text: "Weather coating",
    },
    {
      img: Img6,
      text: "Painting ",
    },
    {
      img: Img7,
      text: "Plumbing Services",
    },
    {
      img: Img8,
      text: "Insulation Services",
    },
  ];

  return (
    <div className="container">
      <div className="flex items-center justify-center py-12 flex-col  ">
        <div className="text-center w-full max-w-[1200px]">
          <h1 className="text-3xl text-primary font-bold mb-4">
            Our Renovation services
          </h1>
        </div>
      </div>

      {/* First row of 4 images */}
      <div className="flex flex-row justify-center gap-7">
        {contact_info.map((contact, i) => (
          <div key={i} className="flex flex-col items-center text-center">
            <div className="flex items-center justify-center rounded-full border-2 border-primary">
              <img
                src={contact.img}
                alt=""
                className="object-cover rounded-full w-14 h-14 md:w-20 md:h-20 object-center"
              />
            </div>
            <p className="md:text-base text-sm break-words">
              {contact.text}
            </p>
          </div>
        ))}
      </div>

      {/* Second row of 4 images */}
      <div className="flex flex-row justify-center gap-7 mt-4">
        {contact_info2.map((contact, i) => (
          <div key={i} className="flex flex-col items-center text-center">
            <div className=" flex items-center justify-center rounded-full border-2 border-primary">
              <img
                src={contact.img}
                alt=""
                className="object-cover rounded-full w-14 h-14 md:w-20 md:h-20 object-center"
              />
            </div>
            <p className="md:text-base text-sm break-words">
              {contact.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurRenovationservices;

