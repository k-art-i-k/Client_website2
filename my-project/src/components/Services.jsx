import React from "react";
import { FaWarehouse, FaGlobe, FaBox } from "react-icons/fa"; // Example using Font Awesome
import Group from '../assets/Group.png'

const ServicesSection = () => {
    return (
        <div className="py-12 bg-gray-100 mt-4">
            <div className="max-w-6xl mx-auto">
                {/* Title Section */}
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-3xl font-bold text-gray-800">
                        Services <span className="text-indigo-600">We Offer</span>
                    </h2>
                    {/* Image on the right side */}
                    <img
                        src={Group}// Replace with your image URL
                        alt="service-icon"
                        className="w-24 h-24 object-cover"
                    />
                </div>

                {/* Cards Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-start">
                        <FaWarehouse className="text-indigo-600 text-4xl mb-4" />
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                            Warehousing Services
                        </h3>
                        <p className="text-sm text-gray-600">
                            A pay-as-you-go solution for pallet storage, inventory
                            management, fulfillment, pick and pack, in/out-bound solutions,
                            and more.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-start">
                        <FaGlobe className="text-indigo-600 text-4xl mb-4" />
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                            Global Freight
                        </h3>
                        <p className="text-sm text-gray-600">
                            Search and compare the best shipping rates among dozens of trusted
                            logistic partners for the last mile delivery and freight.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-start">
                        <FaBox className="text-indigo-600 text-4xl mb-4" />
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                            Packaging Solutions
                        </h3>
                        <p className="text-sm text-gray-600">
                            Our packaging solutions are optimized for each individual customer
                            and are selected based on the customer’s specific needs and
                            requirements.
                        </p>
                    </div>
                </div>

                {/* Buttons Section */}
                <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                    <button className="px-6 py-3 bg-white border-2 border-indigo-600 text-indigo-600 font-medium rounded-md hover:bg-indigo-50">
                        Request Quote
                    </button>
                    <button className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700">
                        Join Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ServicesSection;
