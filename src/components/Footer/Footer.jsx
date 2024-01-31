import React, { useState } from "react";
import { Link } from "react-router-dom";
import footerLogo from "../../assets/infratech-logobg.png";
import { IoLocation } from "react-icons/io5";
import { FaFacebook, FaInstagram, FaLinkedin, FaMobileAlt } from "react-icons/fa";
import ThankYouPopup from "../../ThankYouPopup";

const FooterLinks = [
  {
    title: "Construction",
    link: "/#",
  },
  {
    title: "Home Interior",
    link: "/homeinteriors",
  },
  {
    title: "Renovation Services",
    link: "/renovation-services",
  },
  {
    title: "Painting Services",
    link: "/painting-services",
  },
  {
    title: "Multi-Turf Construction",
    link: "/multi-turf-construction",
  },
];

// Define more links as needed

const Footer = () => {
  const [showOrderPopup, setShowOrderPopup] = useState(false);
  const [showThankYouPopup, setShowThankYouPopup] = useState(false);

  const handleEnquirySubmit = (event) => {
    event.preventDefault();
    setShowThankYouPopup(true);
  };

  return (
    <div className="container bg-primary/10">
      <div className="grid grid-cols-1 md:grid-cols-4 pb-10 relative">
        {/* Logo */}
        <div className="py-8 px-4 text-center md:text-left">
          <Link to="/">
            <img src={footerLogo} alt="" className="max-w-[200px] mx-auto md:mx-0" />
          </Link>
        </div>

        {/* Useful Links */}
        <div className="py-8 px-4 text-center md:text-left">
          <h1 className="sm:text-xl text-xl font-bold mb-3">Useful Links</h1>
          <ul className="flex flex-col gap-3">
            {FooterLinks.map((link) => (
              <Link to={link.link} key={link.title} className="card-link">
                <li className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-black-200">
                  <span>{link.title}</span>
                </li>
              </Link>
            ))}
          </ul>
        </div>

        {/* Social links */}
        <div className="text-center md:text-left">
          <div className="flex justify-center items-center gap-3 py-8 px-4">
            <a href="https://www.instagram.com/infratechbuilders/">
              <FaInstagram className="text-3xl" />
            </a>
            <a href="https://www.facebook.com/infratech.builders.1">
              <FaFacebook className="text-3xl" />
            </a>
            <a href="http://www.linkedin.com/in/infra-tech-builders-6897641a6">
              <FaLinkedin className="text-3xl" />
            </a>
          </div>
          <div className="px-4 hidden md:block">
            <div className="flex hover:text-primary/90 items-center gap-3">
              <IoLocation size={64} />
              <a
                href="https://www.google.com/maps?q=Door+no:74+Ettiappan+street+Golden+George+Nagar+Nerkundram+Chennai-600107"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="text-sm sm:text-base hover:text-primary/90 underline">
                  Door no: 74, Ettiappan street, Golden George Nagar, Nerkundram, Chennai-600107
                </p>
              </a>
            </div>
            <div className="flex items-center hover:text-primary/90 ml-1 ">
              <FaMobileAlt size={20} />
              <div className="flex items-center ml-1 mt-2 flex-col">
                <a href="tel:+917092805747" className="text-sm hover:text-primary/90 sm:text-base underline">
                  +917092805747
                </a>
                <a href="tel:+917010332274" className="text-sm hover:text-primary/90 sm:text-base underline">
                  +917010332274
                </a>{" "}
              </div>
            </div>
          </div>

          <div className="px-4 md:hidden">
            <div className="flex items-center gap-3">
              <IoLocation size={64} />
              <a
                href="https://www.google.com/maps?q=Door+no:74+Ettiappan+street+Golden+George+Nagar+Nerkundram+Chennai-600107"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="text-sm sm:text-base underline">
                  Door no: 74, Ettiappan street, Golden George Nagar, Nerkundram, Chennai-600107
                </p>
              </a>
            </div>
            <div className="flex items-center ml-1.5">
              <FaMobileAlt size={20} />
              <a href="tel:+91 7092805747" className="text-sm ml-3 underline">
                +91 7092805747
              </a>
              <a href="tel:+91 7010332274" className="text-sm  underline">
                +91 7010332274
              </a>
            </div>
          </div>
        </div>

        {/* Enquiry form */}
        <div className="px-4 mt-4 text-center md:text-left">
          <h1 className="sm:text-xl text-xl font-bold mb-3">Enquire Now</h1>
          <form onSubmit={handleEnquirySubmit}>
            <input
              type="text"
              placeholder="Name"
              required
              className="w-full rounded-xl border border-gray-300 dark:border-gray-500 px-2 py-2 mb-4"
            />
            <input
              type="email"
              placeholder="Email"
              required
              className="w-full rounded-xl border border-gray-300 dark:border-gray-500 px-2 py-2 mb-4"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              pattern="[0-9]*"
              required
              className="w-full rounded-xl border border-gray-300 dark:border-gray-500 px-2 py-2 mb-4"
            />
            <textarea
              placeholder="Message"
              required
              className="w-full rounded-xl border border-gray-300 dark:border-gray-500 px-2 py-6 mb-4"
            ></textarea>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
              >
                Submit
              </button>
              {showThankYouPopup && <ThankYouPopup setShowThankYouPopup={setShowThankYouPopup} />}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
