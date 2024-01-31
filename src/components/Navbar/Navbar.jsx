import React, { useState } from "react";
import Logo from "../../assets/infratech-logobg.png";
import { LuPhoneCall } from "react-icons/lu";
import { FaCaretDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu"; // Importing ResponsiveMenu component

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "Construction",
    link: "/construction",  
  },
  {
    id: 4,
    name: "Home Interiors",
    link: "/homeinteriors",
    dropdownLinks: [
      {
        id: 1,
        name: "Modular Kitchen",
        link: "/modularkitchen",
      },
      {
        id: 2,
        name: "Living Room Hall",
        link: "/livingroomhall",
      },
      {
        id: 3,
        name: "False Ceiling",
        link: "/falseceiling",
      },
      {
        id: 4,
        name: "Cupboards/Wardrobes",
        link: "/cupboard-Wardrobes",
      },
      {
        id: 5,
        name: "Dining Room",
        link: "/diningroom",
      },
      {
        id: 6,
        name: "Toilet/Bathroom",
        link: "/toilet-bathroom",
      },
      {
        id: 7,
        name: "TV show case",
        link: "/tv-show-case",
      },
      {
        id: 8,
        name: "Study Room",
        link: "/study-room",
      },
      {
        id: 9,
        name: "Pooja Room",
        link: "/pooja-room",
      },
      {
        id: 10,
        name: "Bedroom",
        link: "/bedroom",
      },
    ],
  },
  {
    id: 3,
    name: "Other Services",
    dropdownLinks: [
      {
        id: 1,
        name: "Multi-Turf Construction",
        link: "/multi-turf-construction",
      },
      {
        id: 2,
        name: "Painting Services",
        link: "/painting-services",
      },
      {
        id: 3,
        name: "Renovation Services",
        link: "/renovation-services",
      },
    ],
  },
  {
    id: 5,
    name: "About Us",
    link: "/about-us",
  },
  {
    id: 6,
    name: "Contact Us",
    link: "/contact-us",
  },
];

const Navbar = ({ handleOrderPopup }) => {
  const [theme, setTheme] = useState("light");
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleLinkClick = (link) => {
    setShowMenu(false);
    window.scrollTo(0, 0);
  };

  return (
    <div className="shadow-md bg-white w-full dark:bg-gray-900 dark:text-white duration-200 fixed z-40">
      {/* Navbar */}
      <div className="bg-white py-2">
        <div className="container lg:ml-[24px] flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex items-center gap-4 text-white font-bold text-2xl">
              <img src={Logo} alt="" className="h-13 w-36" />
              <span></span> {/* don't remove this */}
            </div>

            {/* Adjusted styling for the unordered list */}
            <ul className="sm:flex hidden items-center text-bold gap-8  ml-60 font-semibold  text-black ">
              {Menu.map((data) => (
                <li key={data.id}>
                  {data.dropdownLinks ? (
                    <div className="group relative cursor-pointer">
                      <Link
                        to={data.link}
                        className="flex items-center gap-[2px] py-2 hover:text-primary/75"
                      >
                        {data.name}
                        <span>
                          <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                        </span>
                      </Link>
                      <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
                        <ul>
                          {data.dropdownLinks.map((dropdownData) => (
                            <li key={dropdownData.id}>
                              <Link
                                to={dropdownData.link}
                                className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                              >
                                {dropdownData.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={data.link}
                      className="inline-block px-4 hover:text-primary/75 duration-200"
                    >
                      {data.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden md:block gap-4">
            <button
              onClick={() => handleOrderPopup()}
              className="flex hover:scale-105 bg-gradient-to-r from-primary to-secondary text-white md:py-3 py-2 px-4 rounded-full gap-3 group  md:text-sm "
            >
              <LuPhoneCall className="text-xl  text-white drop-shadow-sm cursor-pointer" />
              <span>Call Now</span>
            </button>
          </div>

          {/* Mobile view toggle */}
          <div className="flex items-center gap-4 md:hidden">
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className="cursor-pointer transition-all text-black"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer transition-all text-black"
                size={30}
              />
            )}
          </div>
        </div>
      </div>

      {/* Responsive Menu */}
      <ResponsiveMenu showMenu={showMenu} />
    </div>
  );
};

export default Navbar;