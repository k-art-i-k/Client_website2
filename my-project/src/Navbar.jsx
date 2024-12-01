import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "./assets/logo_img.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        location.pathname === "/" && !isScrolled
          ? "bg-transparent text-black"
          : "bg-yellow-400 text-black"
      }`}
    >
      {/* Upper menu */}
      <div className="flex items-center h-24 px-6 md:px-12">
        {/* Logo Section */}
        <div className="flex items-center ">
          <img src={logo} alt="Company Logo" className="h-16 rounded-lg md:h-20 md:rounded-lg " />
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
            className={`px-4 border-r border-indigo-500 h-full flex items-center hover:text-indigo-500 ${
              isActive("/") ? "text-indigo-800" : ""
            }`}
          >
            HOME
          </Link>
          <Link
            to="/about"
            className={`px-4 border-r border-indigo-500 h-full flex items-center hover:text-indigo-500 ${
              isActive("/about") ? "text-indigo-800" : ""
            }`}
          >
            ABOUT
          </Link>
          <Link
            to="/services"
            className={`px-4 border-r border-indigo-500 h-full flex items-center hover:text-indigo-500 ${
              isActive("/services") ? "text-indigo-800" : ""
            }`}
          >
            OUR SERVICES
          </Link>
          <Link
            to="/contact"
            className={`px-4 h-full flex items-center hover:text-indigo-500 ${
              isActive("/contact") ? "text-indigo-800" : ""
            }`}
          >
            CONTACT US
          </Link>
        </nav>

        {/* Right-aligned TRACKING Button (Desktop) */}
        <div className="pr-6 hidden md:block">
          <Link
            to="/tracking"
            className={`bg-indigo-800 hover:bg-indigo-800 text-white px-4 py-2 rounded-md ${
              isActive("/tracking") ? "text-indigo-800" : ""
            }`}
          >
            TRACKING
          </Link>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } bg-yellow-400 text-white md:hidden`}
      >
        <nav className="flex flex-col items-center">
          <Link
            to="/"
            className={`hover:bg-indigo-700 w-full text-center py-2 ${
              isActive("/") ? "text-indigo-800" : ""
            }`}
            onClick={toggleMenu}
          >
            HOME
          </Link>
          <Link
            to="/about"
            className={`hover:bg-indigo-700 w-full text-center py-2 ${
              isActive("/about") ? "text-indigo-800" : ""
            }`}
            onClick={toggleMenu}
          >
            ABOUT
          </Link>
          <Link
            to="/services"
            className={`hover:bg-indigo-700 w-full text-center py-2 ${
              isActive("/services") ? "text-indigo-800" : ""
            }`}
            onClick={toggleMenu}
          >
            OUR SERVICES
          </Link>
          <Link
            to="/contact"
            className={`hover:bg-indigo-700 w-full text-center py-2 ${
              isActive("/contact") ? "text-indigo-800" : ""
            }`}
            onClick={toggleMenu}
          >
            CONTACT US
          </Link>
          <Link
            to="/tracking"
            className={`hover:bg-indigo-700 w-full text-center py-2 ${
              isActive("/tracking") ? "text-indigo-800" : ""
            }`}
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
