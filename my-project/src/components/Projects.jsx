import React, { useState } from "react";
import Frame52 from '../assets/Frame52.png';
import Frame53 from '../assets/Frame53.png';
import Frame54 from '../assets/Frame54.png';

const FeaturedProjects = () => {
    const categories = ["All Works", "Construction", "Architecture", "Building", "Renovations", "Interior"];
    const [activeCategory, setActiveCategory] = useState("All Works");

    const projects = [
        {
            image: Frame52,
            title: "Skysky Tower",
            category: "Renovation & Architecture",
        },
        {
            image: Frame53,
            title: "The Fallingwater House",
            category: "Building & Interior",
        },
        {
            image: Frame54,
            title: "The Orange Apartment",
            category: "Construction & Interior",
        },
    ];

    // Filter projects based on the active category
    const filteredProjects =
        activeCategory === "All Works"
            ? projects
            : projects.filter((project) => project.category.toLowerCase().includes(activeCategory.toLowerCase()));

    return (
        <div className="bg-yellow-400 p-6">
            {/* Steps Section */}
            <div className="relative flex flex-col lg:flex-row justify-between items-center mb-12 space-y-6 lg:space-y-0">
                {/* White Connecting Line */}
                <div className="hidden lg:block absolute top-[85%] left-0 w-full h-0.5 bg-gray-100 z-0"></div>

                {/* Steps with Dots */}
                {[
                    "Evaluation And Signing Of The Contract",
                    "Preparation Of The Work Plan",
                    "Implementation Of Quality Works",
                    "Delivering The Project To The Customer",
                ].map((step, index) => (
                    <div key={index} className="relative text-center flex-1">
                        <div className="text-sm text-gray-700 font-semibold">{step}</div>
                        <div className="text-black mt-2">Step {index + 1}</div>
                        {/* Dot */}
                        <div className="mt-2">
                            <div className="w-4 h-4 rounded-full bg-black mx-auto"></div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Featured Project Section */}
            <div className="mb-12">
                <h2 className="text-4xl font-bold text-black mb-6">Featured Project</h2>

                {/* Navbar */}
                <div className="flex flex-wrap lg:flex-nowrap justify-end gap-4 lg:gap-6 text-black mb-6">
                    {categories.map((category, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveCategory(category)}
                            className={`px-4 py-2 font-medium text-sm ${activeCategory === category ? "border-b-4 border-black" : "hover:text-gray-600"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Project Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                    {filteredProjects.map((project, index) => (
                        <div
                            key={index}
                            className="relative bg-white shadow-lg rounded-lg overflow-hidden"
                        >
                            {/* Image */}
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-[250px] sm:h-[300px] lg:h-[400px] object-cover"
                            />

                            {/* Text at the Bottom */}
                            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white text-center py-2">
                                <h3 className="text-lg font-semibold">{project.title}</h3>
                                <p className="text-sm">{project.category}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Explore Button */}
            <div className="text-right">
                <button className="px-6 py-2 bg-black text-white font-semibold rounded hover:bg-gray-800">
                    Explore All Projects
                </button>
            </div>
        </div>
    );
};

export default FeaturedProjects;
