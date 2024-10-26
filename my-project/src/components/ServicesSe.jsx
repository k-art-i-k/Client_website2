import React from 'react';

import Image3 from '../assets/about_bg2.jpg';
import Image4 from '../assets/international-courier.webp';
import Image5 from '../assets/Banner3.jpg';
import Image6 from '../assets/Banner6.jpg';

const services = [
  {
    title: 'Critical Cargo Handling',
    description: 'We ensure safe and efficient transportation of critical goods.',
    buttonText: 'Read More',
    imageUrl: Image3, // Replace with actual image path
  },
  {
    title: 'International Stations with Self Line Haul',
    description: 'Connecting globally with our international logistics network.',
    buttonText: 'Read More',
    imageUrl: Image4, // Replace with actual image path
  },
  {
    title: 'Pune – Mumbai – Pune Direct Trucking',
    description: 'Direct, efficient, and timely delivery across the route.',
    buttonText: 'Read More',
    imageUrl: Image5, // Replace with actual image path
  },
  {
    title: 'Import Operations',
    description: 'Handling complex import procedures for smooth logistics.',
    buttonText: 'Read More',
    imageUrl: Image6, // Replace with actual image path
  },
];

const ServicesSection = () => {
  return (
    <div className="bg-white py-8 sm:py-12 md:py-16 px-4 md:px-8 lg:px-12">
      <div className="text-center mb-8 sm:mb-10">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">What Do We Offer</h2>
        <p className="mt-2 text-gray-500 text-sm sm:text-base">
          We are prepared and able to provide excellent service and pursue the high goals for future.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4  gap-6 md:gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white shadow-xl  shadow-indigo-400 rounded-lg overflow-hidden transition-transform transform hover:scale-105">
            <img src={service.imageUrl} alt={service.title} className="w-full h-40 sm:h-48 md:h-56 object-cover" />
            <div className="p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800">{service.title}</h3>
              <p className="mt-2 text-gray-500 text-sm sm:text-base">{service.description}</p>
              <button className="mt-4 px-3 py-2 sm:px-4 sm:py-2 bg-indigo-900 text-white text-sm font-semibold rounded hover:bg-indigo-600">
                {service.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
