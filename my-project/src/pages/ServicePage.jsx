import { useState } from 'react';
import Image1 from '../assets/Banner2.jpg';
import Image2 from '../assets/Banner1.jpg';
import Image3 from '../assets/Banner3.jpg';
import Image4 from '../assets/Banner4.jpg';
import Image5 from '../assets/Banner5.jpg';
import Image6 from '../assets/Banner6.jpg';
import { Link } from 'react-router-dom';

const ServiceSection = () => {
  return (
    <div className="font-roboto mt-20 md:mt-36">
      <div className="relative">
        <img
          alt="Yellow truck with company logo"
          className="w-full h-[300px] sm:h-[400px] md:h-[400px] lg:h-[400px] object-cover"
          src={Image1}
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-2 font-bold">
            Service
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold">
            We have over 20 years of experience
          </p>
        </div>
      </div>

      
      <div className="bg-white py-8 sm:py-12 md:py-8 px-4 sm:px-8 md:px-16">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            <div className="flex flex-col text-center justify-center md:pl-6 w-full">
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mt-4">
              Our Expertise
              </h2>
              <p className="mt-4 sm:mt-6 text-gray-500 text-sm sm:text-base md:text-lg leading-relaxed">
                 
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* MediaCard divs with responsive styling */}
      <div className="relative h-[60vh] md:h-[100vh] bg-gray-900 text-white p-6 sm:p-8 m-2 md:m-8"> 
        <img
          src={Image2}
          alt="Background image related to courier shipment"
          className="absolute inset-0 w-full h-full object-cover md:h-full sm:h-[50%]"
          width="1920"
          height="1080"
        />
        <div className="absolute inset-0 flex md:items-end md:justify-start items-end justify-center mb-6 mr-4 md:mr-0">
          <div className="card bg-white bg-opacity-90 text-black border-t-8 border-indigo-900 p-2 md:p-8 rounded-lg shadow-lg max-w-lg transition delay-150 duration-300 hover:bg-indigo-900 hover:text-white">
            <h1 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4">
              <b className="border-b-4 border-indigo-900">Domestic service</b>
            </h1>
            <p className="mb-2 md:mb-4 text-base md:text-lg">
            For deliveries within the India, we offer a full list of domestic delivery services to cater to the varying needs of modern businesses. All our domestic services are handled with acumen , and professionalism...

            </p>
            <Link to="/Domestic">Read more</Link>
          </div>

        </div>
      </div>

      <div className="relative h-[60vh] md:h-[100vh] bg-gray-900 text-white p-6 sm:p-8 m-2 md:m-8"> 
        <img
          src={Image1}
          alt="Background image related to courier shipment"
          className="absolute inset-0 w-full h-full object-cover md:h-full sm:h-[50%]"
          width="1920"
          height="1080"
        />
        <div className="absolute inset-0 flex md:items-end md:justify-start items-end justify-center mb-6 mr-4 md:mr-0">
          <div className="card bg-white bg-opacity-90 text-black border-t-8 border-indigo-900 p-2 md:p-8 rounded-lg shadow-lg max-w-lg transition delay-150 duration-300 hover:bg-indigo-900 hover:text-white">
            <h1 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4">
              <b className="border-b-4 border-indigo-900">International Services</b>
            </h1>
            <p className="mb-2 md:mb-4 text-base md:text-lg">
            Our International operations takes your business to the next level with an array of products viz - export service of documents, packages , commercial exports and more...
            </p>
            <Link to="/International-Services">Read more</Link>

          </div>
        </div>
      </div>

      
      <div className="relative h-[60vh] md:h-[100vh] bg-gray-900 text-white p-6 sm:p-8 m-2 md:m-8"> 
        <img
          src={Image3}
          alt="Background image related to courier shipment"
          className="absolute inset-0 w-full h-full object-cover md:h-full sm:h-[50%]"
          width="1920"
          height="1080"
        />
        <div className="absolute inset-0 flex md:items-end md:justify-start items-end justify-center mb-6 mr-4 md:mr-0">
          <div className="card bg-white bg-opacity-90 text-black border-t-8 border-indigo-900 p-2 md:p-8 rounded-lg shadow-lg max-w-lg transition delay-150 duration-300 hover:bg-indigo-900 hover:text-white">
            <h1 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4">
              <b className="border-b-4 border-indigo-900">Freight / Dangerous / Critical Cargo handling : Road Transport</b>
            </h1>
            <p className="mb-2 md:mb-4 text-base md:text-lg">
            Our Road Transport services extend across the length and breadth of the nation and are the most economical mode of logistics with the assurance of on-times deliveries...
            </p>
            <Link to="/Freight">Read more</Link>

          </div>
        </div>
      </div>

      <div className="relative h-[60vh] md:h-[100vh] bg-gray-900 text-white p-6 sm:p-8 m-2 md:m-8"> 
        <img
          src={Image4}
          alt="Background image related to courier shipment"
          className="absolute inset-0 w-full h-full object-cover md:h-full sm:h-[50%]"
          width="1920"
          height="1080"
        />
        <div className="absolute inset-0 flex md:items-end md:justify-start items-end justify-center mb-6 mr-4 md:mr-0">
          <div className="card bg-white bg-opacity-90 text-black border-t-8 border-indigo-900 p-2 md:p-8 rounded-lg shadow-lg max-w-lg transition delay-150 duration-300 hover:bg-indigo-900 hover:text-white">
            <h1 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4">
              <b className="border-b-4 border-indigo-900">International Stations with Self Line haul</b>
            </h1>
            <p className="mb-2 md:mb-4 text-base md:text-lg">
            We have our own direct line haul of express / courier shipments being flown to Qatar ( DOHA ) , UAE ( DUBAI ) , Singapore , Iran , & Iraq.
            </p>
            <Link to="/International-Stations-Self-Line-haul">Read more</Link>

          </div>
        </div>
      </div>

      <div className="relative h-[60vh] md:h-[100vh] bg-gray-900 text-white p-6 sm:p-8 m-2 md:m-8"> 
        <img
          src={Image5}
          alt="Background image related to courier shipment"
          className="absolute inset-0 w-full h-full object-cover md:h-full sm:h-[50%]"
          width="1920"
          height="1080"
        />
        <div className="absolute inset-0 flex md:items-end md:justify-start items-end justify-center mb-6 mr-4 md:mr-0">
          <div className="card bg-white bg-opacity-90 text-black border-t-8 border-indigo-900 p-2 md:p-8 rounded-lg shadow-lg max-w-lg transition delay-150 duration-300 hover:bg-indigo-900 hover:text-white">
            <h1 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4">
              <b className="border-b-4 border-indigo-900">Pune – Mumbai – Pune Direct trucking</b>
            </h1>
            <p className="mb-2 md:mb-4 text-base md:text-lg">
            We offer express trucking services between PUNE and Mumbai, thus opening a lot of access to the entire Maharastra , Vidharba region.
            </p>
            <Link to="/Pune-Mumbai-Pune">Read more</Link>

          </div>
        </div>
      </div>

      <div className="relative h-[60vh] md:h-[100vh] bg-gray-900 text-white p-6 sm:p-8 m-2 md:m-8"> 
        <img
          src={Image6}
          alt="Background image related to courier shipment"
          className="absolute inset-0 w-full h-full object-cover md:h-full sm:h-[50%]"
          width="1920"
          height="1080"
        />
        <div className="absolute inset-0 flex md:items-end md:justify-start items-end justify-center mb-6 mr-4 md:mr-0">
          <div className="card bg-white bg-opacity-90 text-black border-t-8 border-indigo-900 p-2 md:p-8 rounded-lg shadow-lg max-w-lg transition delay-150 duration-300 hover:bg-indigo-900 hover:text-white">
            <h1 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4">
              <b className="border-b-4 border-indigo-900">Import operations</b>
            </h1>
            <p className="mb-2 md:mb-4 text-base md:text-lg">
            With our ever expanding network of agents, we are providing import services to our esteemed clientele.
            </p>
            <Link to="/Import-operations">Read more</Link>

          </div>
        </div>
      </div>

      
    </div>
  );
};


export default ServiceSection

