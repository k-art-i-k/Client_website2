import React, { useEffect, useState } from "react";
import Banner from "../assets/AboutBanner.jpg";
import SkillsSection from "../components/SkillSection"; // Importing the SkillsSection component
import bg1 from "../assets/about_bg1.jpg"
import {motion} from "framer-motion"
import {Helmet} from 'react-helmet'

import bg5 from "../assets/contract_logistics.webp"


const AboutUs = () => {
  return (
<>
<Helmet>
        <title>About Us || V-Win</title>
        <meta name="description" content="Learn about V-Win, a leading logistics company in the industry." />
      </Helmet>
    <div className="font-roboto mt-16 md:mt-24">
      <div className="relative">
        <img
          alt="Yellow truck with company logo"
          className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
          src={Banner}
        />
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-2 font-bold">
            About Us
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-lg">
            We have over 20 years of experience
          </p>
        </div>
      </div>

      {/* About section */}
      <div className=" py-8 sm:py-12 md:py-8 px-4 sm:px-8 md:px-16">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            <div className="flex flex-col md:pl-6 w-full">
              <span className="text-black text-base md:text-xl font-bold uppercase">
                Our solid background
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mt-4">
                Get to know about{" "}
                <b className="text-indigo-500 font-bold">V Win Express International</b>
              </h2>
              <p className="mt-4 sm:mt-6 text-black text-sm sm:text-base md:text-lg leading-relaxed">
                Our vast array of express delivery solutions can solve any
                challenge posed by today’s changing business environments. We
                believe in innovation, reliability, and providing superior
                service quality at all times. With strategic partnerships, we
                are able to cover global destinations with the passing of every
                single day. Our vision to provide a committed service enables us
                to carry on and achieve a prized customer list that will bear
                testimony to our exceptional service. Our services are flexible
                enough to accommodate any special requirements of our customers.
                We are fully aware of the sensitive nature of our customer’s
                consignments/documents in terms of secrecy, safety, and speed of
                delivery. For us, every customer is a special project to be
                handled with utmost professionalism.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* MediaCard divs with responsive styling */}
      <div className="relative h-[60vh] md:h-[100vh] bg-gray-500 text-white p-6 sm:p-8 m-2 md:m-8">
        <img
          src={bg1}
          alt="Background image related to courier shipment"
          className="absolute inset-0 w-full h-full object-cover md:h-full sm:h-[50%]"
          width="1920"
          height="1080"
        />
        <div className="absolute inset-0 flex md:items-end md:justify-start items-end justify-center mb-6 mr-4 md:mr-0">
          <div className="card bg-white bg-opacity-90 text-black border-t-8 border-indigo-500 p-2 md:p-8 rounded-lg shadow-lg max-w-lg transition delay-150 duration-300 hover:bg-indigo-500 hover:text-white">
            <h1 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4">
              <b className="">Domestic & eCommerce Courier Services:</b>
            </h1>
            <p className="mb-2 md:mb-4 text-base md:text-lg">
            Specialized in time-sensitive deliveries and last-mile solutions across India.
            </p>
          </div>
        </div>
      </div>

      <div className="relative h-[60vh] md:h-[100vh] bg-gray-500 text-white p-6 sm:p-8 m-2 md:m-8">
        <img
          src={bg5}
          alt="Background image related to courier shipment"
          className="absolute inset-0 w-full h-full object-cover md:h-full sm:h-[50%]"
          width="1920"
          height="1080"
        />
        <div className="absolute inset-0 flex md:items-end md:justify-start items-end justify-center mb-6 mr-4 md:mr-0">
          <div className="card bg-white bg-opacity-90 text-black border-t-8 border-indigo-500 p-2 md:p-8 rounded-lg shadow-lg max-w-lg transition delay-150 duration-300 hover:bg-indigo-500 hover:text-white">
            <h1 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4">
              <b className="">International Express Services to MENA Region:</b>
            </h1>
            <p className="mb-2 md:mb-4 text-base md:text-lg">
            Expert logistics to UAE, KSA, Qatar, Bahrain, Oman, Kuwait, and Iran with express delivery.
            </p>
          </div>
        </div>
      </div>

      <div className="relative h-[60vh] md:h-[100vh] bg-gray-500 text-white p-6 sm:p-8 m-2 md:mx-8">
        <img
          src="https://storage.googleapis.com/a1aa/image/4mk94toZwV4wPBUhzCpNL6wcsyTw9VgjPlfqFSaHNyHetZqTA.jpg"
          alt="Background image related to courier shipment"
          className="absolute inset-0 w-full h-full object-cover md:h-full sm:h-[50%]"
          width="1920"
          height="1080"
        />
        <div className="absolute inset-0 flex md:items-end md:justify-start items-end justify-center mb-6 mr-4 md:mr-0">
          <div className="card bg-white bg-opacity-90 text-black border-t-8 border-indigo-500 p-2 md:p-8 rounded-lg shadow-lg max-w-lg transition delay-150 duration-300 hover:bg-indigo-500 hover:text-white">
            <h1 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4">
              <b className="">Freight and Import Operations:</b>
            </h1>
            <p className="mb-2 md:mb-4 text-base md:text-lg">
            Comprehensive air, sea, and road freight solutions and global import assistance.
            </p>
          </div>
        </div>
      </div>

      {/* SkillsSection component */}
      <SkillsSection />
    </div>
</>
  );
};

export default AboutUs;
