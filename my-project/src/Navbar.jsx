import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./assets/logo_img.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full text-white z-50 bg-white">
      {/* Upper menu */}
      <div className="flex bg-yellow-400 text-black font-semibold items-center h-24 px-6 md:px-12">
        {/* Logo Section */}
        <div className="flex items-center">
          <img src={logo} alt="Company Logo" className="h-16 md:h-24 bg-white" />
        </div>

        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden ml-auto">
          <button onClick={toggleMenu} className="text-black">
            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} size="lg" />
          </button>
        </div>

        {/* Navigation Links (Desktop) */}
        <nav className="flex-1 hidden md:flex justify-center space-x-6">
          <Link
            to="/"
            className="hover:text-red-500 px-4 border-r border-red-500 h-full flex items-center"
          >
            HOME
          </Link>
          <Link
            to="/about"
            className="hover:text-red-500 px-4 border-r border-red-500 h-full flex items-center"
          >
            ABOUT
          </Link>
          <Link
            to="/services"
            className="hover:text-red-500 px-4 border-r border-red-500 h-full flex items-center"
          >
            OUR SERVICES
          </Link>
          <Link
            to="/contact"
            className="hover:text-red-500 px-4 border-r border-red-500 h-full flex items-center"
          >
            CONTACT US
          </Link>
        </nav>

        {/* Right-aligned TRACKING Button (Desktop) */}
        <div className="pr-6 hidden md:block">
          <Link
            to="/tracking"
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
          >
            TRACKING
          </Link>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${menuOpen ? "block" : "hidden"} bg-black text-white md:hidden`}>
        <nav className="flex flex-col items-center">
          <Link to="/" className="hover:bg-red-700 w-full text-center py-2" onClick={toggleMenu}>
            HOME
          </Link>
          <Link to="/about" className="hover:bg-red-700 w-full text-center py-2" onClick={toggleMenu}>
            ABOUT
          </Link>
          <Link to="/services" className="hover:bg-red-700 w-full text-center py-2" onClick={toggleMenu}>
            OUR SERVICES
          </Link>
          <Link to="/contact" className="hover:bg-red-700 w-full text-center py-2" onClick={toggleMenu}>
            CONTACT US
          </Link>
          {/* Tracking Button inside Mobile Menu */}
          <Link to="/tracking" className="hover:bg-red-700 w-full text-center py-2" onClick={toggleMenu}>
            TRACKING
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
