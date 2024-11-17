import React from "react";
import airplaneImage from "../assets/Aero.png"; // Replace with the actual airplane image file
import signatureImage from "../assets/Sign.png"; // Replace with the actual signature image file

const AboutUs = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-8 md:py-12 bg-white">
            {/* Left Section - Airplane Image */}
            <div className="flex-1 mb-6 md:mb-0">
                <img
                    src={airplaneImage}
                    alt="Airplane"
                    className="w-full max-w-[300px] sm:max-w-[70%] md:max-w-[70%] md:ml-80"
                />
            </div>

            {/* Right Section - Content */}
            <div className="flex-1 max-w-xl md:mr-36 text-center md:text-left">
                <h2 className="text-lg font-bold text-gray-600 mb-2">
                    About Us
                </h2>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-500 mb-4">
                    25 years <br />
                    <span className="text-black">of experience!</span>
                </h1>
                <p className="text-gray-600 text-base sm:text-lg mb-4 px-2 md:px-0">
                    We have a team of experienced professionals who have been in the
                    industry for over 25 years. Our contractors have a wealth of
                    knowledge and skills that they have acquired over the years, making
                    them experts in their field.
                </p>
                <p className="text-gray-600 text-base sm:text-lg mb-6 px-2 md:px-0">
                    With 25 years of experience, our contractors have a deep
                    understanding of industry standards and regulations. We ensure that
                    all our projects comply with the latest safety and building codes,
                    and that the final product meets or exceeds our client’s
                    expectations.
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
                <div className="flex justify-center md:justify-end">
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
