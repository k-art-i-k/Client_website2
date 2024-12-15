import React, { useEffect } from 'react';
import Map from '../assets/Map.png'
import Aos from 'aos';
import {motion} from 'framer-motion'

const MapSection = () => {
    useEffect(() => {
        Aos.init({
          duration: 1200,
          easing: "ease-in-out-cubic",
          once: true,
        });
      }, []);
    return (
        <div className="bg-gray-100 flex flex-col items-center py-12" >
            {/* Title */}
            <motion.h2
            initial={{opacity:0, y:-50}}
            whileInView={{opacity:1, y:0}}
            viewport={{once:true}}
            transition={{duration:1}}
            className="text-center text-xl font-bold text-gray-800 mb-2">
                You Name It! We Deliver There
            </motion.h2>
            <div className="w-16 h-1 bg-yellow-500 mx-auto mb-8"></div>

            {/* Map */}
            <div className="relative w-full max-w-4xl" data-aos='fade-up'>
                {/* Map image */}
                <img
                    src={Map}// Replace with your map image path
                    alt="World Map"
                    className="rounded-lg w-full h-auto"
                />

                {/* Location markers */}
                <div className="absolute left-[15%] top-[40%] flex items-center space-x-2">
                    <div className="bg-yellow-500 text-white text-sm px-2 py-1 rounded-md shadow-lg">
                        USA<br />25,000
                    </div>
                </div>
                <div className="absolute left-[55%] top-[35%] flex items-center space-x-2">
                    <div className="bg-purple-500 text-white text-sm px-2 py-1 rounded-md shadow-lg">
                        India<br />25,000
                    </div>
                </div>
                <div className="absolute left-[70%] top-[45%] flex items-center space-x-2">
                    <div className="bg-indigo-500 text-white text-sm px-2 py-1 rounded-md shadow-lg">
                        Berlin<br />25,000
                    </div>
                </div>
            </div>

            {/* Buttons */}
           
        </div>
    );
};

export default MapSection;