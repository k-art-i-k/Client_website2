import React from 'react';
import { useNavigate } from 'react-router-dom';
import Image1 from '../assets/Banner2.jpg';
import Image2 from '../assets/Banner1.jpg';
import Image3 from '../assets/Banner3.jpg';
import Image4 from '../assets/Banner4.jpg';
import Image5 from '../assets/Banner5.jpg';
import Image6 from '../assets/Banner6.jpg';

const services = [
  {
    name: 'Domestic Service',
    image: Image1,
  },
  {
    name: 'International Services',
    image: Image2,
  },
  {
    name: 'Freight / Dangerous / Critical Cargo handling: Road Transport',
    image: Image3,
  },
  {
    name: 'International Stations with Self Line haul',
    image: Image4,
  },
  {
    name: 'Pune – Mumbai – Pune Direct trucking',
    image: Image5,
  },
  {
    name: 'Import Operations',
    image: Image6,
  },
];

const OurServices = () => {
  const navigate = useNavigate(); // useNavigate hook

  const handleServiceClick = () => {
    navigate('/services'); // Redirect to /services page
  };

  return (
    <section className="px-4 py-12">
      {/* Heading Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">Our Expertise</h2>
        <p className="mt-4 text-lg text-gray-600">
          WE BELIEVE IN INNOVATION, RELIABILITY, AND PROVIDING SUPERIOR SERVICE QUALITY AT ALL TIMES.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            onClick={handleServiceClick}
            className="relative cursor-pointer group"
          >
            <img
              src={service.image}
              alt={service.name}
              className="w-full h-48 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-yellow-300 opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
              <h3 className="text-black text-lg font-semibold">{service.name}</h3>
            </div>
            {/* Always show the name on mobile */}
            <div className="absolute inset-0 flex items-center justify-center md:hidden bg-black bg-opacity-40">
              <h3 className="text-white text-lg font-semibold">{service.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
