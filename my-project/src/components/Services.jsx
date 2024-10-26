import React from 'react';
import { useNavigate } from 'react-router-dom';
import Image1 from '../assets/Intl_courier.jpg';
import Image2 from '../assets/domestic_service.jpg';
import Image3 from '../assets/about_bg2.jpg';
import Image4 from '../assets/international-courier.webp';
import Image5 from '../assets/Banner3.jpg';
import Image6 from '../assets/Banner6.jpg';

const OurSection = () => {
    const navigate = useNavigate(); // Initialize navigate for navigation

    // Function to handle image click
    const handleImageClick = () => {
        navigate('/services'); // Navigate to /services
    };

    return (
        <div className="p-4 px-20">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800">Our Expertise</h2>
                <p className="mt-4 text-lg text-gray-600">
                    WE BELIEVE IN INNOVATION, RELIABILITY, AND PROVIDING SUPERIOR SERVICE QUALITY AT ALL TIMES.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {/* Hardcoded images */}
                <div className="relative group cursor-pointer aspect-[4/3]" onClick={handleImageClick}>
                    <img src={Image1} alt="Cranes at a port" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 flex justify-center items-center bg-yellow-500 bg-opacity-50 text-white text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    International Services
                    </div>
                </div>
                <div className="relative group cursor-pointer aspect-[4/3]" onClick={handleImageClick}>
                    <img src={Image2} alt="Construction site with cranes" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 flex justify-center items-center bg-yellow-500 bg-opacity-50 text-white text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Domestic service
                    </div>
                </div>
                <div className="relative group cursor-pointer aspect-[4/3] aspect-[4/4]" onClick={handleImageClick}>
                    <img src={Image3} alt="Heavy transport vehicles" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 flex justify-center items-center bg-yellow-500 bg-opacity-50 text-white text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Freight / Dangerous / Critical Cargo handling : Road Transport
                    </div>
                </div>
                <div className="relative group cursor-pointer aspect-[4/3]" onClick={handleImageClick}>
                    <img src={Image4} alt="Cranes lifting heavy equipment" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 flex justify-center items-center bg-yellow-500 bg-opacity-50 text-white text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    International Stations with Self Line haul
                    </div>
                </div>
                <div className="relative group cursor-pointer aspect-[4/3]" onClick={handleImageClick}>
                    <img src={Image5} alt="Industrial equipment" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 flex justify-center items-center bg-yellow-500 bg-opacity-50 text-white text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Pune – Mumbai – Pune Direct trucking
                    </div>
                </div>
                <div className="relative group cursor-pointer aspect-[4/3]" onClick={handleImageClick}>
                    <img src={Image6} alt="Industrial equipment" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 flex justify-center items-center bg-yellow-500 bg-opacity-50 text-white text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Import operations
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurSection;
