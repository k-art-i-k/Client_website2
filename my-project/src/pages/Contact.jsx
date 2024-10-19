import React from "react";

const Contact = () => {
  return (
    <div className="font-roboto">
      <div className="relative">
        {/* Background Image */}
        <img
          alt="A worker in protective gear holding a walkie-talkie"
          className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
          src="https://storage.googleapis.com/a1aa/image/P3smQnaTptYDClRIiaNgUcJJNnU1ZEq5OkatTx3Of8wDCL0JA.jpg"
          width={1600}
          height={600}
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-2 font-bold">
            Contact Us
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold">
            We are here to assist you
          </p>
        </div>
      </div>

      
      <div className="bg-white py-8 sm:py-12 md:py-16 px-4 sm:px-8 md:px-16">
        <div className="container mx-auto">
        
          <form className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 border border-gray-300 rounded-md"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 border border-gray-300 rounded-md"
              required
            />
            <textarea
              placeholder="Your Message"
              className="p-3 border border-gray-300 rounded-md"
              rows="4"
              required
            ></textarea>
            <button className="mt-4 bg-yellow-500 text-white font-semibold text-sm md:text-md py-2 px-4 rounded-3xl">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
