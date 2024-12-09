import React, { useEffect, useState } from 'react';
import Style from './header.module.css'

const Header = ({ setShowMobileNavItems, showmobileNavItems }) => {
  const [scrollDirection, setScrollDirection] = useState("up"); // "up" or "down"
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos > prevScrollPos) {
        setScrollDirection("down");
      } else if (currentScrollPos < prevScrollPos) {
        setScrollDirection("up");
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <nav
      className={`h-[60px] lg:h-[94px] bg-black bg-opacity-40 backdrop-blur-[18px] flex items-center justify-center w-full fixed ${scrollDirection === 'up' ? 'top-0' : 'top-[-100px]'} left-0 z-50 ${Style.navbar}`}
    >
      {/* Logo for mobile */}
      <a href="#">
        <img
          src="/img/orla_logo.svg"
          alt="Logo"
          className="h-[40px] lg:hidden pl-5"
          data-loaded="true"
        />
      </a>

      {/* Navbar List */}
      <ul
        className="hidden lg:flex items-center gap-[100px] font-[radikalThin] text-white text-opacity-50 text-[16px]"
        id="navbarList"
      >
        <li>
          <a href="./residencies.html">Residences</a>
        </li>
        <li>
          <a href="./partners.html">Partners</a>
        </li>
        <li>
          <a href="./index.html">
            <img
              src="/img/orla_logo.svg"
              alt="Logo"
              className="h-[65px]"
              data-loaded="true"
            />
          </a>
        </li>
        <li>
          <a href="./amenities.html">Amenities</a>
        </li>
        <li>
          <a href="./services.html">Services</a>
        </li>
      </ul>

      {/* Enquire Button */}
      <div className="absolute top-1/2 -translate-y-1/2 right-[10px] lg:right-[22px]">
        <button
          className="text-xs lg:text-sm w-[110px] lg:w-[150px] h-[30px] lg:h-[40px] border border-white text-white"
        >
          ENQUIRE NOW
        </button>
      </div>

      {/* Mobile Menu Toggle */}
      <div
        className="lg:hidden absolute top-[50%] -translate-y-[50%] left-4"
        id="mobileNavToggle"

      >
        <img
          src="/img/menu.svg"
          alt="Menu Toggle"
          className="w-8 h-8"
          data-loaded="true"
          onClick={() => {
            setShowMobileNavItems(!showmobileNavItems)
          }
          }
        />
      </div>
    </nav>

  )


}

export default Header
