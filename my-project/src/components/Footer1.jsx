import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white py-10">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-20 max-w-screen-xl grid grid-cols-1 md:grid-cols-3 md:gap-28 gap-8">
        
        {/* Latest News Section */}
        <div>
        <h4 className="text-lg md:text-xl  font-semibold mb-4">Contact Us</h4>
  <div className="border-t-4 border-yellow-500  mb-4"></div>
  <div className="mt-4">
   
    <p><strong>Email:</strong> ops@v-winexpress.com</p>
    <p><strong>Phone:</strong> +91 9768703115, +91 9833066922</p>
    <p>
      <strong>Address:</strong> Bharateeya Kala Mandal, Ground Level, C/2-A, No:3, OM Nagar, 
      Near J.B.Nagar, Andheri East, Mumbai-400 099.
    </p>
  </div>
</div>


        {/* Site Map Section */}
        <div>
          <h3 className="text-lg md:text-xl font-semibold mb-4">Site Map</h3>
          <div className="border-t-4 border-yellow-500 mb-4"></div>
          <ul className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-white"></div>
            <li className="mb-2 flex items-center">
              <div className="w-4 h-px bg-white mr-2"></div> 
              <Link to="/about" className="hover:text-gray-400">About Us</Link>
            </li>
            <li className="mb-2 flex items-center">
              <div className="w-4 h-px bg-white mr-2"></div> 
              <Link to="/services" className="hover:text-gray-400">How We Work</Link>
            </li>
            <li className="mb-2 flex items-center">
              <div className="w-4 h-px bg-white mr-2"></div> 
              <Link to="/contact" className="hover:text-gray-400">Quick Support</Link>
            </li>
            <li className="mb-2 flex items-center">
              <div className="w-4 h-px bg-white mr-2"></div> 
              <Link to="/contact" className="hover:text-gray-400">Contact Us</Link>
            </li>
            <li className="mb-2 flex items-center">
              <div className="w-4 h-px bg-white mr-2"></div> 
              <Link to="/privacy-policy" className="hover:text-gray-400">Privacy Policy</Link>
            </li>
          </ul>
        </div>

        {/* Contact Details Section */}
        <div>
          <h3 className="text-lg md:text-xl font-semibold mb-4">Contact Details</h3>
          <div className="border-t-4 border-yellow-500 mb-4"></div>
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-white"></div>
            <p className="mb-4 flex items-center">
              <div className="w-4 h-px bg-white mr-2"></div> 
              Bharateeya Kala Mandal,
            </p>
            <p className="mb-4 flex items-center">
              <div className="w-4 h-px bg-white mr-2"></div> 
              Ground Level, C/2- A 
            </p>
            <p className="mb-4 flex items-center">
              <div className="w-4 h-px bg-white mr-2"></div> 
               No:3, OM Nagar Near
              J.B.Nagar, Andheri East, Mumbai-400 099.
            </p>
            <p className="mb-4 flex items-center">
              <div className="w-4 h-px bg-white mr-2"></div> 
              Email us at – : info@v-winexpress.com
            </p>
            <p className="mb-4 flex items-center">
              <div className="w-4 h-px bg-white mr-2"></div> 
              Phone: +91 9768703115 / <br /> +91 9833066922 
            </p>
            
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
