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
        <div className="p-4 md:px-20">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800">Our Expertise</h2>
                <p className="mt-4 text-lg text-gray-600">
                    WE BELIEVE IN INNOVATION, RELIABILITY, AND PROVIDING SUPERIOR SERVICE QUALITY AT ALL TIMES.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {/* Hardcoded images */}
                {[Image1, Image2, Image3, Image4, Image5, Image6].map((image, index) => (
                    <div
                        key={index}
                        className="relative group cursor-pointer aspect-[3/2]"
                        onClick={handleImageClick}
                    >
                        <img src={image} alt={`Service ${index + 1}`} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 flex justify-center items-center bg-yellow-500 bg-opacity-50 text-white text-lg opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
                            {/* Add unique text for each image */}
                            {index === 0 && "International Services"}
                            {index === 1 && "Domestic service"}
                            {index === 2 && "Freight / Dangerous / Critical Cargo handling : Road Transport"}
                            {index === 3 && "International Stations with Self Line haul"}
                            {index === 4 && "Pune – Mumbai – Pune Direct trucking"}
                            {index === 5 && "Import operations"}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurSection;
