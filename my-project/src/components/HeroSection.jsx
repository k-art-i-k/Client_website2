import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import Frame3 from '../assets/Frame3.png';
import Review from '../assets/RightContent.png';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [forwardingNumber, setForwardingNumber] = useState('');
  const navigate = useNavigate();

  const handleTrack = () => {
    if (!trackingNumber.trim() && !forwardingNumber.trim()) {
      alert('Please enter either a tracking number or a forwarding number!');
      return;
    }
    navigate(
      `/tracking?trackingNo=${trackingNumber}&forwardingNo=${forwardingNumber}`
    );
  };

  return (
    <div className="relative flex flex-col items-center justify-between h-[700px]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${Frame3})` }}
      ></div>
      <div className="absolute inset-0"></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center lg:justify-between w-full gap-6">
        {/* Left Side: Text */}
        <div className="lg:w-1/2 text-center lg:text-left mt-20 lg:mt-56">
          <h1 className="text-3xl mt-4 sm:text-4xl font-bold text-black mb-4">
            It's A Big World Out There, Go Explore!
          </h1>
        </div>

        {/* Right Side: Reviews and Description */}
        <div className="lg:w-1/2 flex flex-col lg:items-start mt-6 lg:mt-56 lg:ml-36 text-center lg:text-left">
          <p className="text-base sm:text-lg text-gray-700 mb-4 px-4 lg:px-0">
            We're here to make your travel dreams a reality. Our intuitive
            search engine scours thousands of flights to bring you the best
            deals tailored to your preferences and budget.
          </p>
          <div className="flex items-center justify-center lg:justify-start gap-4">
            <div className="flex items-center">
              <img
                src={Review}
                alt="review"
                className="w-[90%] md:w-full cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="relative z-10 w-full max-w-5xl mt-10 bg-white shadow-lg rounded-lg p-4 translate-y-7">
        <div className="flex flex-col md:flex-row items-center gap-4">
          {/* Tracking Number Input */}
          <div className="flex items-center w-full border border-gray-300 rounded-lg px-4 py-2">
            <FaSearch className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Enter Tracking Number"
              className="w-full text-sm sm:text-base focus:outline-none"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
            />
          </div>

          {/* Forwarding Number Input */}
          <div className="flex items-center w-full border border-gray-300 rounded-lg px-4 py-2">
            <FaSearch className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Enter Forwarding Number"
              className="w-full text-sm sm:text-base focus:outline-none"
              value={forwardingNumber}
              onChange={(e) => setForwardingNumber(e.target.value)}
            />
          </div>

          {/* Button */}
          <button
            onClick={handleTrack}
            className="bg-blue-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg shadow hover:bg-blue-700 transition text-sm sm:text-base"
          >
            Track
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
