import React from 'react';
import tracking from '../assets/Banner_tracking.jpg';

const TrackingPage = () => {
  return (
    <div className="bg-gray-800 font-roboto mt-20 md:mt-36">
      {/* Banner Section */}
      <div className="relative">
        {/* Banner Image */}
        <img
          alt="Illustration of a delivery truck with a map and location pins indicating tracking"
          className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover opacity-50"
          src={tracking}
          width={1920}
          height={600}
        />
        {/* Banner Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            Track
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl">
            Track Your Shipment
          </p>
        </div>
      </div>

      {/* Tracking Section */}
      <div className="bg-gray-100 flex items-center justify-center w-full py-12">
        <div className="bg-gray-100 p-10 rounded-lg flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-10 w-full max-w-7xl">
          <div className="flex-shrink-0">
            <img
              alt="Delivery person holding a package with a logistics background"
              className="rounded-lg w-full md:max-w-2xl h-auto" // Ensured image displays correctly
              src={tracking}
            />
          </div>
          <div className="flex-grow">
            <h1 className="md:text-5xl text-3xl font-bold text-gray-800 text-center md:text-left">
              Track <span className="text-indigo-600">Your Shipment</span>
            </h1>
            <div className="mt-8 p-8 border border-gray-300 rounded-lg">
              <div className="flex justify-center space-x-6 mb-4">
                {" "}
                {/* Centered options */}
                <label className="flex items-center text-lg">
                  <input
                    className="form-radio text-indigo-600"
                    name="tracking"
                    type="radio"
                    defaultChecked
                  />
                  <span className="ml-2 text-gray-700">Tracking no</span>
                </label>
                <label className="flex items-center text-lg">
                  <input
                    className="form-radio text-indigo-600"
                    name="tracking"
                    type="radio"
                  />
                  <span className="ml-2 text-gray-700">Forwarding no</span>
                </label>
              </div>
              <div className="flex items-center border border-yellow-500 rounded-full px-6 py-2">
                <input
                  className="flex-grow outline-none text-gray-600 text-lg px-2"
                  placeholder="Enter Your Tracking Number"
                  type="text"
                />
              </div>
              <div className="flex justify-center mt-4">
                {" "}
                {/* Added this wrapper div */}
                <button className="w-1/3 md:w-1/4 bg-indigo-600 text-white py-2 rounded-full text-md md:text-lg font-semibold">
                  TRACK
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackingPage;
