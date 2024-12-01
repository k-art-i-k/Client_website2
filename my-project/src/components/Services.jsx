import React from "react";
import { FaHome, FaPlaneArrival, FaTruck, FaRoute, FaGlobe, FaBoxOpen } from "react-icons/fa";
import Group from '../assets/Group.png';
import { Link } from "react-router-dom";

const ServicesSection = () => {
    return (
        <div className="py-12 bg-white mt-4">
            <div className="max-w-6xl mx-auto">
                {/* Title Section */}
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-3xl font-bold text-gray-800">
                        Services <span className="text-indigo-600">We Offer</span>
                    </h2>
                    <img
                        src={Group}
                        alt="service-icon"
                        className="w-24 h-24 object-cover"
                    />
                </div>

                {/* Cards Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {/* Domestic Services */}
                    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-start">
                        <FaHome className="text-indigo-600 text-4xl mb-4" />
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                            Domestic Services
                        </h3>
                        <p className="text-sm text-gray-600">
                            Timely delivery of all urgent, eCommerce, and time-sensitive shipments across India with precision and speed.
                        </p>
                    </div>

                    {/* Import Operations */}
                    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-start">
                        <FaPlaneArrival className="text-indigo-600 text-4xl mb-4" />
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                            Import Operations
                        </h3>
                        <p className="text-sm text-gray-600">
                            Seamless import solutions from global stations, ensuring efficient handling and delivery of inbound shipments.
                        </p>
                    </div>

                    {/* Pune - Mumbai - Pune Direct Trucking */}
                    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-start">
                        <FaTruck className="text-indigo-600 text-4xl mb-4" />
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                            Pune - Mumbai - Pune Direct Trucking
                        </h3>
                        <p className="text-sm text-gray-600">
                            Dedicated trucking service between Pune and Mumbai for expedited cargo movement with direct connectivity.
                        </p>
                    </div>

                    {/* International Stations with Safe Line Haul */}
                    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-start">
                        <FaRoute className="text-indigo-600 text-4xl mb-4" />
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                            International Stations with Safe Line Haul
                        </h3>
                        <p className="text-sm text-gray-600">
                            Reliable international cargo transfers with secure and seamless line-haul operations from station to station.
                        </p>
                    </div>

                    {/* International Services */}
                    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-start">
                        <FaGlobe className="text-indigo-600 text-4xl mb-4" />
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                            International Services
                        </h3>
                        <p className="text-sm text-gray-600">
                            Express courier services to the MENA region with specialization in UAE, KSA, Qatar, Bahrain, Oman, Kuwait, and Iran.
                        </p>
                    </div>

                    {/* Freight / Dangerous / Critical Cargo Handling */}
                    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-start">
                        <FaBoxOpen className="text-indigo-600 text-4xl mb-4" />
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                            Freight / Dangerous / Critical Cargo Handling / Road Transport
                        </h3>
                        <p className="text-sm text-gray-600">
                            Expert air and sea freight solutions, critical and dangerous goods handling, and efficient road transport services worldwide.
                        </p>
                    </div>
                </div>

                {/* Buttons Section */}
                <div className="mt-8 flex  sm:flex-row justify-center gap-4">
                    <Link to="/tracking" className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700">
                        Join Now
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesSection;
