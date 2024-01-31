import React from "react";
import Banner from "../../assets/hero/contactusimg.jpg";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Callusbanner = () => {
  return (
    <div className="mb-20 bg-gray-100 text-black" style={BannerImg}>
      <div className="container backdrop-blur-sm py-10">
        <div className="space-y-6 mx-auto text-center sm:text-left">
          <h1 className="text-xl text-primary text-center sm:text-4xl font-semibold">
            Reach Us To Enhance Your Lifestyle.
          </h1>
          <p className="text-white text-center sm:text-2xl font-semibold">
          <a  className="">
               Call :
            </a>
            <a href="tel:+917092805747" className="underline">
               +91 7092805747
            </a>
            <a className="">
             (or)
            </a>
            <a href="tel:+917010332274" className="underline">
             +91 +917010332274
            </a>
          </p>
          <p className="text-white text-center sm:text-2xl font-semibold">
            <a href="mailto:infratechbuilders@gmail.com" className="underline">
              infratechbuilders@gmail.com
            </a>
          </p>
          <p className="text-white text-center sm:text-2xl font-semibold">
            Infratech Builders is dedicated to ensuring that outstanding home
            improvement is within reach for everyone.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Callusbanner;
