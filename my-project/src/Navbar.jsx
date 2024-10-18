import React from "react";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-black text-white z-50">
      <div className="container mx-auto flex justify-center items-center h-20">
        <nav className="flex space-x-6">
          <a href="#" className="hover:text-gray-400 px-4 border-r  border-gray-400 h-full flex items-center">
            HOME
          </a>
          <a href="#" className="hover:text-gray-400 px-4 border-r border-gray-400 h-full flex items-center">
            ABOUT US
          </a>
          <a href="#" className="hover:text-gray-400 px-4 border-r border-gray-400 h-full flex items-center">
            OUR SERVICES
          </a>
          <a href="#" className="hover:text-gray-400 px-4 border-r border-gray-400 h-full flex items-center">
            CONTACT US
          </a>
          <a href="#" className="hover:text-gray-400 px-4 h-full flex items-center">
            TRACKING
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;