import React, { useState } from "react";
import { Link } from 'react-router-dom';
import logo from "./assets/logo_img.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full text-white z-50">
      {/* This div is hidden on mobile */}
      <div className="flex bg-indigo-900 items-center h-16 hidden md:flex">
        <nav className="w-full flex  justify-center space-x-6">
          <Link to="/" className="hover:text-gray-400 px-4 border-r border-gray-400 h-full flex items-center">
            HOME
          </Link>
          <Link to="/about" className="hover:text-gray-400 px-4 border-r border-gray-400 h-full flex items-center">
            ABOUT
          </Link>
          <Link to="/services" className="hover:text-gray-400 px-4 border-r border-gray-400 h-full flex items-center">
            OUR SERVICES
          </Link>
          <Link to="/contact" className="hover:text-gray-400 px-4 border-r border-gray-400 h-full flex items-center">
            CONTACT US
          </Link>
          <Link to="/tracking" className="hover:text-gray-400 px-4 h-full flex items-center">
            TRACKING
          </Link>
        </nav>
      </div>

      {/* This section is visible on both desktop and mobile */}
      <div className="flex justify-between items-center bg-slate-100 h-auto md:h-24 p-4 shadow-lg">
        <div className="flex items-center">
          
          <img src={logo} alt="Company Logo" className="h-16 md:h-32 md:ml-32" />
        </div>

        {/* Hamburger icon on the right for mobile screens */}
        <div className="md:hidden flex items-center ml-auto">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
          >
            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} size="lg" />
          </button>
        </div>

        
        <div className="hidden md:flex items-center space-x-4 mr-16">
          <div className="flex items-center bg-red-600 rounded-full p-2 md:p-3">
            <FontAwesomeIcon icon={faPhone} className="text-white mr-2" />
            <p className="text-white text-sm md:text-lg">Phone: (123) 456-7890</p>
          </div>
          <div className="flex items-center bg-red-600 rounded-full p-2 md:p-3">
            <FontAwesomeIcon icon={faEnvelope} className="text-white mr-2" />
            <p className="text-white text-sm md:text-lg">Email: info@company.com</p>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      <div className={`${menuOpen ? 'block' : 'hidden'} bg-black text-white md:hidden`}>
        <nav className="flex flex-col items-center">
          <Link
            to="/"
            className="hover:bg-gray-700 w-full text-center py-2"
            onClick={toggleMenu}
          >
            HOME
          </Link>
          <Link
            to="/about"
            className="hover:bg-gray-700 w-full text-center py-2"
            onClick={toggleMenu}
          >
            ABOUT
          </Link>
          <Link
            to="/services"
            className="hover:bg-gray-700 w-full text-center py-2"
            onClick={toggleMenu}
          >
            OUR SERVICES
          </Link>
          <Link
            to="/contact"
            className="hover:bg-gray-700 w-full text-center py-2"
            onClick={toggleMenu}
          >
            CONTACT US
          </Link>
          <Link
            to="/tracking"
            className="hover:bg-gray-700 w-full text-center py-2"
            onClick={toggleMenu}
          >
            TRACKING
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
