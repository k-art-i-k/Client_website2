import React from "react";
import Banner from "../assets/Banner_about.jpg";
import About_image from "../assets/about_image.jpg";
import SkillsSection from "../components/SkillSection"; // Importing the SkillsSection component

const AboutUs = () => {
  return (
    <div className="font-roboto mt-20 md:mt-36">
      <div className="relative">
        <img
          alt="Yellow truck with company logo"
          className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
          src={Banner}
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-2 font-bold">
            About Us
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold">
            We have over 20 years of experience
          </p>
        </div>
      </div>

      <div className="bg-white py-8 sm:py-12 md:py-16 px-4 sm:px-8 md:px-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="flex flex-col md:pl-6">
              <span className="text-gray-400 text-sm sm:text-base font-bold uppercase">
                Our solid background
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mt-4">
                Get to know about{" "}
                <em className="text-indigo-600 font-bold">V Win Express Intl</em>
              </h2>
              <p className="mt-4 sm:mt-6 text-gray-500 text-sm sm:text-base md:text-lg leading-relaxed">
              Our vast array of express delivery solutions can solve any
                  challenge posed by today’s changing business environments. We
                  believe in innovation, reliability, and providing superior
                  service quality at all times. With strategic partnerships, we
                  are able to cover global destinations with the passing of
                  every single day. Our vision to provide a committed service
                  enables us to carry on and achieve a prized customer list that
                  will bear testimony to our exceptional service. Our services
                  are flexible enough to accommodate any special requirements of
                  our customers. We are fully aware of the sensitive nature of
                  our customer’s consignments/documents in terms of secrecy,
                  safety, and speed of delivery. For us, every customer is a
                  special project to be handled with utmost professionalism.
              </p>
            </div>

            <div className="flex justify-center">
              <img
                src={About_image}
                alt="About our company"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* SkillsSection component */}
      <SkillsSection />
    </div>
  );
};

export default AboutUs;
