import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white py-10">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-20 max-w-screen-xl grid grid-cols-1 md:grid-cols-3 md:gap-28 gap-8">
        
        {/* Latest News Section */}
        <div>
          <h3 className="text-lg md:text-xl font-semibold mb-4">Latest News</h3>
          <div className="border-t-4 border-yellow-500 mb-4"></div>
          <div className="mb-4">
            <p>Clinker silo steel structure – Case Study</p>
            <p className="text-yellow-500">24 Apr, 2023</p>
          </div>
          <div className="border-t border-yellow-500 mb-4"></div>
          <div className="mb-4">
            <p>Penthouse structure at JSW cement</p>
            <p className="text-yellow-500">10 Apr, 2023</p>
          </div>
          <div className="border-t border-yellow-500 mb-4"></div>
          <div className="mb-4">
            <p>Al Faris recently installed a Steam Box at a new Waste to Energy Plant in Dubai</p>
            <p className="text-yellow-500">17 May, 2022</p>
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
              <a href="/about" className="hover:text-gray-400">About Us</a>
            </li>
            <li className="mb-2 flex items-center">
              <div className="w-4 h-px bg-white mr-2"></div> 
              <a href="/services" className="hover:text-gray-400">How We Work</a>
            </li>
            <li className="mb-2 flex items-center">
              <div className="w-4 h-px bg-white mr-2"></div> 
              <a href="/contact" className="hover:text-gray-400">Quick Support</a>
            </li>
            <li className="mb-2 flex items-center">
              <div className="w-4 h-px bg-white mr-2"></div> 
              <a href="/contact" className="hover:text-gray-400">Contact Us</a>
            </li>
            <li className="mb-2 flex items-center">
              <div className="w-4 h-px bg-white mr-2"></div> 
              <a href="/privacy-policy" className="hover:text-gray-400">Privacy Policy</a>
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
