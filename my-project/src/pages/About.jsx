import React from 'react';

const AboutUs = () => {
  return (
    <div className="font-roboto">
      <div className="relative">
        <img
          alt="Yellow truck with company logo"
          className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
          src="https://storage.googleapis.com/a1aa/image/mu8H1W8vKnLXL50kUpidiDan3LBfvRZz2QQFgoZfg6yCnAoTA.jpg"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">About Us</h1>
          <p className="text-sm sm:text-base md:text-lg">We have over 20 years of experience</p>
        </div>
      </div>

      <div className="py-8 sm:py-12 md:py-16 px-4 sm:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xs sm:text-sm text-gray-500 uppercase">Our Solid Background</h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2">
            Get to know about our <span className="text-blue-700">company</span>
          </h3>
          <div className="mt-4 sm:mt-6 md:mt-8">
            <img
              alt="Airplane and shipping containers"
              className="w-full h-auto"
              src="https://storage.googleapis.com/a1aa/image/a7ehgMi3ZzQMdaJL2n7lFCEirW8LSTjbhELCGodQVW9hTA0JA.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
