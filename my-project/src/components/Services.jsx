import React from 'react';
import { useNavigate } from 'react-router-dom';
import Image1 from '../assets/International.jpg';
import Image2 from '../assets/Domestic.jpg';
import Image3 from '../assets/Banner3n.jpg';
import Image4 from '../assets/Banner4n.jpg';
import Image5 from '../assets/Pune.jpg';
import Image6 from '../assets/Import.jpg';

const OurSection = () => {
    const navigate = useNavigate(); // Initialize navigate for navigation

    // Function to handle image click
    const handleImageClick = () => {
        navigate('/services'); // Navigate to /services
    };

    return (
        <div className="p-4 md:px-20">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-black">Our Expertise</h2>
                <p className="mt-4 text-lg text-white">
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
                        <div className="absolute inset-0 flex justify-center items-center bg-red-500 bg-opacity-50 text-white text-lg opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
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
