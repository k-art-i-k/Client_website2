import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-20 max-w-screen-xl grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Our Company Section */}
        <div>
          <h3 className="text-lg md:text-xl font-semibold mb-4">Our Company</h3>
          <p className="text-sm md:text-base">
            Express Global Reach, Valuable Local Expertise. Our operations started in 2017,
            backed by several decades of expertise. V Win Express International has grown
            to become a brand to reckon with in Mumbai. We extend an array of solutions
            to serve customers whose business networks span the globe.
          </p>
          <p className="text-sm md:text-base mt-2">
            Our portfolio includes many businesses & trading companies, big, medium, and
            small-sized industrial houses who have come to rely on our exceptional express
            courier services.
          </p>
          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>

        {/* Additional Pages Section */}
        <div>
          <h3 className="text-lg md:text-xl font-semibold mb-4">Additional Pages</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-sm md:text-base hover:text-gray-400">About Us</a>
            </li>
            <li>
              <a href="#" className="text-sm md:text-base hover:text-gray-400">How We Work</a>
            </li>
            <li>
              <a href="#" className="text-sm md:text-base hover:text-gray-400">Quick Support</a>
            </li>
            <li>
              <a href="#" className="text-sm md:text-base hover:text-gray-400">Contact Us</a>
            </li>
            <li>
              <a href="#" className="text-sm md:text-base hover:text-gray-400">Privacy Policy</a>
            </li>
          </ul>
        </div>

        {/* Contact Us Form */}
        <div>
          <h3 className="text-lg md:text-xl font-semibold mb-4">Contact Us</h3>
          <form>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 bg-gray-800 text-white border border-gray-700 rounded-md"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="E-Mail Address"
                className="w-full p-3 bg-gray-800 text-white border border-gray-700 rounded-md"
              />
            </div>
            <div className="mb-4">
              <textarea
                placeholder="Your Message"
                className="w-full p-3 bg-gray-800 text-white border border-gray-700 rounded-md h-32"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-md w-full md:w-auto"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
