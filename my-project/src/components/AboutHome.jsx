import React, { useEffect } from "react";
import airplaneImage from "../assets/Media.png"; // Replace with the actual airplane image file
import signatureImage from "../assets/Sign.png"; // Replace with the actual signature image file
import Aos from "aos";

const AboutUs = () => {
    useEffect(() => {
        Aos.init({
          duration: 1200,
          easing: "ease-in-out-cubic",
          once: true,
        });
      }, []);
    return (
        <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-8 md:py-12 bg-white">
            {/* Left Section - Airplane Image */}
            <div className="flex-1 mb-6 md:mb-0" data-aos="fade-right">
                <img
                    src={airplaneImage}
                    alt="Airplane"
                    className="w-full max-w-[300px] sm:max-w-[70%] md:max-w-[70%] md:ml-40"
                />
            </div>

            {/* Right Section - Content */}
            <div className="flex-1 max-w-xl md:mr-36 text-center md:text-left" data-aos="fade-left">
                <h2 className="text-lg font-bold text-gray-600 mb-2">
                    About Us
                </h2>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-500 mb-4">
                    25 years <br />
                    <span className="text-black">of experience!</span>
                </h1>
                <p className="text-gray-600 text-base sm:text-lg mb-4 px-2 md:px-0">
                At V Win Express International, we are committed to delivering excellence in logistics. Specializing in both domestic and international courier services, we ensure reliable, secure, and timely delivery solutions for businesses and individuals. From express shipments to MENA countries to air freight, sea freight, and critical cargo handling, our services are tailored to meet your unique logistics needs. With our robust import operations and direct trucking between Pune and Mumbai, we bring efficiency and trust to every delivery.
                </p>

                {/* Stats */}
                <div className="flex flex-col sm:flex-row justify-around text-center mb-6 gap-6 sm:gap-0">
                    <div>
                        <h3 className="text-2xl font-bold text-yellow-500">25+</h3>
                        <p className="text-gray-600">Years of Experience</p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-yellow-500">378+</h3>
                        <p className="text-gray-600">Project Complete</p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-yellow-500">69+</h3>
                        <p className="text-gray-600">Winning Global Award</p>
                    </div>
                </div>

                {/* Signature */}
                <div className="flex justify-center items-center ml-14 md:justify-end">
                    <img
                        src={signatureImage}
                        alt="Signature"
                        className="h-16 sm:h-20 md:h-24 mr-0 md:mr-4"
                    />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
