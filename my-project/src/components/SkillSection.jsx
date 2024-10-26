import React, { useEffect } from "react";

const SkillsSection = () => {
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
    <div
      className="relative flex items-center justify-center py-12 sm:py-16 lg:py-20 bg-neutral-800 text-white px-4 sm:px-8 lg:px-16"
      style={{
        backgroundImage: `url(https://storage.googleapis.com/a1aa/image/4mk94toZwV4wPBUhzCpNL6wcsyTw9VgjPlfqFSaHNyHetZqTA.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay for reduced opacity */}
      <div className="absolute inset-0 bg-black opacity-90 z-0"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="text-left flex flex-col justify-center items-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 sm:mb-8">
              Our <span className="text-yellow-500">Skills</span>
            </h2>
            <p className="text-gray-100 text-sm sm:text-base text- text-center md:text-lg">
              We are also associated with airlines to provide Airport to Airport
              services for your freight shipments on very lucrative rates. With
              the Indian economy booming, the international express industry is
              growing at a rate of 25% every year. This is the right time to
              join the mainstream. For a lone entrepreneur, it becomes a tough
              and long battle to create and run a system single-handedly.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-neutral-800 p-6 sm:p-8 bg-opacity-50 h-40 sm:h-48 rounded-lg flex flex-col items-center justify-center text-center">
              <h3 className="text-4xl sm:text-5xl font-bold text-yellow-500 counter" data-target="945">
                0
              </h3>
              <p className="text-gray-300 mt-2 text-base sm:text-sm">Work Hours</p>
            </div>
            <div className="bg-neutral-800 bg-opacity-50 p-6 sm:p-8 h-40 sm:h-48 rounded-lg flex flex-col items-center justify-center text-center">
              <h3 className="text-4xl sm:text-5xl font-bold text-yellow-500 counter" data-target="1280">
                0
              </h3>
              <p className="text-gray-300 mt-2 text-base sm:text-sm">Great Reviews</p>
            </div>
            <div className="bg-neutral-800 bg-opacity-50 p-6 sm:p-8 h-40 sm:h-48 rounded-lg flex flex-col items-center justify-center text-center">
              <h3 className="text-4xl sm:text-5xl font-bold text-yellow-500 counter" data-target="578">
                0
              </h3>
              <p className="text-gray-300 mt-2 text-base sm:text-sm">Projects Done</p>
            </div>
            <div className="bg-neutral-800 bg-opacity-50 p-6 sm:p-8 h-40 sm:h-48 rounded-lg flex flex-col items-center justify-center text-center">
              <h3 className="text-4xl sm:text-5xl font-bold text-yellow-500 counter" data-target="26">
                0
              </h3>
              <p className="text-gray-300 mt-2 text-base sm:text-sm">Awards Won</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
