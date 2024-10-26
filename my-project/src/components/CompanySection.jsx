import React from "react";
import Image7 from '../assets/Banner7.jpg'; // Update the path to your image

const CompanySection = () => {
  return (
    <section className="relative w-full h-auto py-8 md:py-16">
      {/* Image Section with Overlayed Text */}
      <div className="relative w-full h-80 sm:h-96 md:h-[500px]">
        <img
          src={Image7} // Replace this with the correct image path
          alt="Company overview"
          className="object-cover w-full h-full"
        />

        {/* Overlay (dark layer to improve text readability) */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Text Content on Image */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 text-center md:px-12">
          <h2 className="text-xs  uppercase tracking-wider text-neutral-400 md:text-base font-bold">
            Who we are
          </h2>
          <h1 className="mt-2 text-xl font-bold leading-tight text-white sm:text-2xl md:text-4xl">
            Get to know about <span className=" text-yellow-500">V Win Express International</span>
          </h1>
          <p className="mt-4 text-xs text-white sm:text-sm md:text-lg md:max-w-xl max-w-sm">
            Our Portfolio includes many businesses & trading companies, big, medium, and small-sized industrial houses who have come to rely on our exceptional express courier services.
          </p>
          <p className="mt-2 text-xs text-white sm:text-sm md:text-lg md:max-w-xl max-w-sm">
            Powered by a global network and backed by local expertise, we connect people with goods, services, ideas, and technologies that ignite innovation and take businesses forward.
          </p>
          <button className="mt-6 px-4 py-2 text-xs font-semibold text-white hover:text-indigo-900 bg-indigo-900 hover:bg-white rounded-full  sm:px-6 sm:py-2 sm:text-sm">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default CompanySection;
