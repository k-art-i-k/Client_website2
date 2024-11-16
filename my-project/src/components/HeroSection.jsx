import React from 'react';
import { FaMapMarkerAlt, FaPlane, FaWeightHanging } from 'react-icons/fa'; // Icons from react-icons
import Frame3 from '../assets/Frame3.png'; // Adjust path if necessary
import Review from '../assets/RightContent.png'

const HeroSection = () => {
  return (
    <div className="relative flex flex-col items-center justify-between h-[700px] "> {/* Changed h-full to h-screen */}
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${Frame3})` }}
      ></div>
      <div className="absolute inset-0 "></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center lg:justify-between w-full gap-4">
        {/* Left Side: Text */}
        <div className="lg:w-1/2">
          <h1 className="text-4xl font-bold text-black mb-4 mt-56">
            It's A Big World Out There, Go Explore!
          </h1>
        </div>

        {/* Right Side: Reviews and Description */}
        <div className="lg:w-1/2 flex flex-col lg:items-start mt-56 ml-36"> {/* Adjusted to mx-6 for equal spacing */}
          <p className="text-lg text-gray-700 mb-4">
            We're here to make your travel dreams a reality. Our intuitive search engine scours thousands of flights to bring you the best deals tailored to your preferences and budget.
          </p>
          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <img
                src={Review}
                alt="review"
                className="w-full h-8 rounded-full cursor-pointer"
              />

            </div>

          </div>
        </div>

      </div>

      {/* Search Section */}
      <div className="relative z-10 w-full max-w-5xl mt-6 bg-white shadow-lg rounded-lg p-4 translate-y-7">
        <div className="flex items-center gap-4">
          {/* Origin */}
          <div className="flex items-center w-full border border-gray-300 rounded-lg px-4 py-2">
            <FaMapMarkerAlt className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Origin"
              className="w-full focus:outline-none"
            />
          </div>

          {/* Destination */}
          <div className="flex items-center w-full border border-gray-300 rounded-lg px-4 py-2">
            <FaPlane className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Destination"
              className="w-full focus:outline-none"
            />
          </div>

          {/* Weight */}
          <div className="flex items-center w-full border border-gray-300 rounded-lg px-4 py-2">
            <FaWeightHanging className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Weight (KG)"
              className="w-full focus:outline-none"
            />
          </div>

          {/* Button */}
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition">
            Track
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
