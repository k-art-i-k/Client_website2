import React from "react";
import Image7 from '../assets/Banner7.jpg'; // Update the path to your image

const CompanySection = () => {
  return (
    <section className="relative w-full h-auto py-8 md:py-16">
      
      {/* Image Section with Overlayed Text */}
      <div className="relative w-full h-96 md:h-[500px]">
        <img
          src={Image7} // Replace this with the correct image path
          alt="Company overview"
          className="object-cover w-full h-full"
        />

        {/* Overlay (dark layer to improve text readability) */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Text Content on Image */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center md:px-12">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-yellow-500">Who we are</h2>
          <h1 className="mt-2 text-3xl font-bold leading-tight text-white md:text-4xl">
            Get to know about <span className="text-blue-400">our company</span>
          </h1>
          <p className="mt-4 text-lg text-white md:max-w-xl">
            Our Portfolio includes many businesses & trading companies, big, medium, and small-sized industrial houses who have come to rely on our exceptional express courier services.
          </p>
          <p className="mt-2 text-lg text-white md:max-w-xl">
            Powered by a global network and backed by local expertise, we connect people with goods, services, ideas, and technologies that ignite innovation and take businesses forward.
          </p>
          <button className="mt-6 px-6 py-2 text-sm font-semibold text-yellow-600 bg-white rounded-full hover:bg-yellow-500 hover:text-white">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default CompanySection;
