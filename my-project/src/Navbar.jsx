import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "./assets/logo_img.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleScroll = () => {
    const heroSection = document.querySelector(".hero-section");
    if (heroSection) {
      const heroBottom = heroSection.getBoundingClientRect().bottom;
      // If the hero section is out of view, change navbar background
      if (heroBottom <= 0) {
        setIsHeroVisible(false);
      } else {
        setIsHeroVisible(true);
      }
    }
  };

  useEffect(() => {
    // When location changes
    if (location.pathname === "/") {
      // Add scroll event listener on the home page
      window.addEventListener("scroll", handleScroll);

      // Run the scroll handler once when the component mounts or route changes
      handleScroll();
    } else {
      // Set to false on other routes
      setIsHeroVisible(false);
    }

    // Clean up the scroll event listener when leaving the page or component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 w-full text-white z-50 transition-colors duration-300 ${
        isHeroVisible && location.pathname === "/" ? "bg-transparent" : "bg-white"
      }`}
    >
      {/* Upper menu */}
      <div className="flex  bg-indigo-900 items-center h-16 hidden md:flex">
        <nav className="w-full flex justify-center space-x-6">
          <Link
            to="/"
            className="hover:text-gray-400 px-4 border-r border-gray-400 h-full flex items-center"
          >
            HOME
          </Link>
          <Link
            to="/about"
            className="hover:text-gray-400 px-4 border-r border-gray-400 h-full flex items-center"
          >
            ABOUT
          </Link>
          <Link
            to="/services"
            className="hover:text-gray-400 px-4 border-r border-gray-400 h-full flex items-center"
          >
            OUR SERVICES
          </Link>
          <Link
            to="/contact"
            className="hover:text-gray-400 px-4 border-r border-gray-400 h-full flex items-center"
          >
            CONTACT US
          </Link>
          <Link to="/tracking" className="hover:text-gray-400 px-4 h-full flex items-center">
            TRACKING
          </Link>
        </nav>
      </div>

      {/* Main navbar */}
      <div className="flex justify-between items-center  bg-slate-100 h-auto md:h-24 p-4 shadow-lg">
        <div className="flex items-center">
          <img src={logo} alt="Company Logo" className="h-16 md:h-24 md:ml-36" />
        </div>

        {/* Hamburger menu for mobile */}
        <div className="md:hidden flex items-center ml-auto">
          <button onClick={toggleMenu} className="text-black focus:outline-none">
            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} size="lg" />
          </button>
        </div>

        {/* Contact info for desktop */}
        <div className="hidden md:flex items-center space-x-4 mr-4">
          <div className="flex items-center bg-indigo-900 rounded-full p-2 md:p-4">
            <FontAwesomeIcon icon={faPhone} className="text-amber-300 mr-2" />
            <p className="text-white text-sm md:text-base">Phone: +91 9768703115 / +91 9833066922 </p>
          </div>
          <div className="flex items-center bg-indigo-900 rounded-full p-2 md:p-4">
            <FontAwesomeIcon icon={faEnvelope} className="text-amber-300 mr-2" />
            <p className="text-white text-sm md:text-base">Email: info@v-winexpress.com</p>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${menuOpen ? "block" : "hidden"} bg-black text-white md:hidden`}>
        <nav className="flex flex-col items-center">
          <Link to="/" className="hover:bg-gray-700 w-full text-center py-2" onClick={toggleMenu}>
            HOME
          </Link>
          <Link to="/about" className="hover:bg-gray-700 w-full text-center py-2" onClick={toggleMenu}>
            ABOUT
          </Link>
          <Link to="/services" className="hover:bg-gray-700 w-full text-center py-2" onClick={toggleMenu}>
            OUR SERVICES
          </Link>
          <Link to="/contact" className="hover:bg-gray-700 w-full text-center py-2" onClick={toggleMenu}>
            CONTACT US
          </Link>
          <Link to="/tracking" className="hover:bg-gray-700 w-full text-center py-2" onClick={toggleMenu}>
            TRACKING
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
