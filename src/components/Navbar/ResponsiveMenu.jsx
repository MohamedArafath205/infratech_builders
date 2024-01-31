import React from "react";
import { FaCaretDown } from "react-icons/fa";
import Logo from "../../assets/infratech-logobg.png";
import { Link } from "react-router-dom"; 

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
    name: "Home Interior",
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

const ResponsiveMenu = ({ showMenu, toggleMenu, handleOrderPopup }) => {
  const [openDropdown, setOpenDropdown] = React.useState(null);

  const handleMenuItemClick = (dropdownId) => {
    if (openDropdown === dropdownId) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(dropdownId);
    }
  };

  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col  justify-between bg-white px-8 pb-6 pt-24 text-slate-950 transition-all duration-200 md:hidden`}
    >
      <div className="card">
        <div className="flex items-center justify-start gap-3">
          <div>
            <a href="#">
              <img src={Logo} alt="Logo" className="h-13 w-36" />
            </a>
          </div>
        </div>
        <nav className="mt-12">
          <ul className="space-y-4 text-bold text-xl">
            {Menu.map((data) => (
              <li key={data.id}>
                {data.dropdownLinks ? (
                  <div className="group relative cursor-pointer">
                    <Link
                      to={data.link}
                      className="flex justify-center items-center mr-2 gap-[2px] py-1 hover:text-primary/75"
                      onClick={() => handleMenuItemClick(data.id)}
                    >
                      {data.name}
                      <span>
                        <FaCaretDown
                          className={`transition-all duration-200 ${
                            openDropdown === data.id ? "rotate-180" : ""
                          }`}
                        />
                      </span>
                    </Link>
                    <div
                      className={`absolute z-[9999] ${
                        openDropdown === data.id ? "block" : "hidden"
                      } w-[230px] rounded-md bg-white p-4 text-black shadow-md`}
                    >
                      <ul>
                        {data.dropdownLinks.map((dropdownData) => (
                          <li key={dropdownData.id}>
                            <Link
                              to={dropdownData.link}
                              className="inline-block w-full  rounded-md p-1 hover:bg-primary/20"
                              onClick={toggleMenu}
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
                    onClick={toggleMenu}
                  >
                    {data.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="footer">
        <button
          onClick={handleOrderPopup}
          className="bg-gradient-to-r from-primary to-secondary hover:scale-110 duration-200 text-white py-4 px-6 rounded-full"
        >
          Call Now
        </button>
      </div>
    </div>
  );
};

export default ResponsiveMenu;