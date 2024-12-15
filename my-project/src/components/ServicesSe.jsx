import React, { useEffect } from "react";
import Image1 from '../assets/Image1.png'
import Image2 from '../assets/Image2.png'
import Image3 from '../assets/Image3.png'
import {motion} from 'framer-motion'
import Aos from "aos";

const OperationMode = () => {
  useEffect(() => {
    Aos.init({
      duration: 1200,
      easing: "ease-in-out-cubic",
      once: true,
    });
  }, []);
  return (
    <div className=" mx-auto p-6 bg-white">
      <motion.h2 
      initial={{opacity:0 , y:-50}}
      whileInView={{ opacity: 1, y: 0 }}
     
      viewport={{ once: true }}

      transition={{duration:1}}
      className="text-center text-2xl font-bold mb-8">
        <span className="border-b-4 border-indigo-800 pb-1">Operation</span> Mode
      </motion.h2>
      <div className="space-y-8">
        {/* Connect Section */}
        <div className="flex items-center space-x-8">

          <div className="flex-1" data-aos="fade-right">
            <div className="flex items-center mb-2">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-800 text-white font-bold mr-4">
                1
              </div>
              <h3 className="font-semibold text-xl">Connect</h3>
            </div>
            <p className="text-gray-800  md:ml-14">
            Engage with our team through easy online booking or direct consultation to plan your shipment requirements.
            </p>
          </div>
          <div className="flex-1" data-aos='fade-left'>
            <img
              src={Image1}
              alt="Connect"
              className="w-full h-60 object-contain"
            />
          </div>
        </div>

        {/* Store Section */}
        <div className="flex items-center space-x-8" >
          <div className="flex-1" data-aos="fade-right">
            <img
              src={Image2}
              alt="Store"
              className="w-full h-60 object-contain"
            />
          </div>
          <div className="flex-1" data-aos="fade-left">
            <div className="flex items-center mb-2">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-800 text-white font-bold mr-4">
                2
              </div>
              <h3 className="font-semibold text-xl">Store</h3>
            </div>
            <p className="text-gray-800 md:ml-14">
            Your cargo is safely collected and stoindigo at our state-of-the-art facility for accurate and careful preparation.
            </p>
          </div>
        </div>

        {/* Ship Section */}
        <div className="flex items-center space-x-8">

          <div className="flex-1" data-aos="fade-right">
            <div className="flex items-center mb-2">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-800 text-white font-bold mr-4">
                3
              </div>
              <h3 className="font-semibold text-xl">Ship</h3>
            </div>
            <p className="text-gray-800 md:ml-14">
            We handle the shipment via air, sea, or road, ensuring timely and secure delivery to the final destination.
 
            </p>
          </div>
          <div className="flex-1" data-aos="fade-left">
            <img
              src={Image3}
              alt="Ship"
              className="w-full h-60 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OperationMode;
