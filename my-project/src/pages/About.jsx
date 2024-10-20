import React, { useEffect } from "react";
import Banner from "../assets/Banner_about.jpg";
import About_image from "../assets/about_image.jpg";

const AboutUs = () => {
  useEffect(() => {
    const counters = document.querySelectorAll(".counter");
    counters.forEach((counter) => {
      counter.innerText = "0";
      const updateCounter = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;
        const increment = target / 200;
        if (count < target) {
          counter.innerText = `${Math.ceil(count + increment)}`;
          setTimeout(updateCounter, 10);
        } else {
          counter.innerText = target;
        }
      };
      updateCounter();
    });
  }, []);

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
            {/* Text Content */}
            <div className="flex flex-col md:pl-6">
              <div className="right-content">
                <span className="text-gray-400 text-sm sm:text-base font-bold uppercase">
                  Our solid background
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mt-4">
                  Get to know about{" "}
                  <em className="text-indigo-600 font-bold">our company</em>
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
            </div>

            {/* Image Content */}
            <div className="flex justify-center">
              <div className="w-11/12 max-w-md lg:max-w-none">
                <img
                  src={About_image}
                  alt="About our company"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center py-12 sm:py-16 lg:py-20 bg-[#1a1a1a] text-white px-4 sm:px-8 lg:px-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="text-left flex flex-col justify-center">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 sm:mb-8">
                Our <span className="text-yellow-500">Skills</span>
              </h2>
              <p className="text-gray-100 text-sm sm:text-base md:text-lg">
                We are also associated with airlines to provide Airport to
                Airport services for your freight shipments on very lucrative
                rates. With the Indian economy booming, the international
                express industry is growing at a rate of 25% every year. This is
                the right time to join the mainstream. For a lone entrepreneur,
                it becomes a tough and long battle to create and run a system
                single-handedly.
              </p>
              <div>
        <button className=" mt-4 md:mt-8 bg-yellow-500 text-white font-semibold text-sm md:text-md md:font-bold py-2 md:px-4 px-3 rounded-3xl">
          READ MORE
        </button>
        </div>
            </div>
            

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-800 p-6 sm:p-8 h-40 sm:h-48 rounded-lg flex flex-col items-center justify-center text-center">
                <h3
                  className="text-4xl sm:text-5xl font-bold text-yellow-500 counter"
                  data-target="945"
                >
                  0
                </h3>
                <p className="text-gray-400 mt-2 text-xs sm:text-sm">Work Hours</p>
              </div>
              <div className="bg-gray-800 p-6 sm:p-8 h-40 sm:h-48 rounded-lg flex flex-col items-center justify-center text-center">
                <h3
                  className="text-4xl sm:text-5xl font-bold text-yellow-500 counter"
                  data-target="1280"
                >
                  0
                </h3>
                <p className="text-gray-400 mt-2 text-xs sm:text-sm">Great Reviews</p>
              </div>
              <div className="bg-gray-800 p-6 sm:p-8 h-40 sm:h-48 rounded-lg flex flex-col items-center justify-center text-center">
                <h3
                  className="text-4xl sm:text-5xl font-bold text-yellow-500 counter"
                  data-target="578"
                >
                  0
                </h3>
                <p className="text-gray-400 mt-2 text-xs sm:text-sm">Projects Done</p>
              </div>
              <div className="bg-gray-800 p-6 sm:p-8 h-40 sm:h-48 rounded-lg flex flex-col items-center justify-center text-center">
                <h3
                  className="text-4xl sm:text-5xl font-bold text-yellow-500 counter"
                  data-target="26"
                >
                  0
                </h3>
                <p className="text-gray-400 mt-2 text-xs sm:text-sm">Awards Won</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
