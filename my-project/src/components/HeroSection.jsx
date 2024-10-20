import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image1 from '../assets/Banner1.jpg';
import Image2 from '../assets/Banner2.jpg';

const HeroCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false, // Disable default arrows
  };

  return (
    <div className="relative w-full h-screen overflow-hidden mt-20 md:mt-36" id="hero-section">
      <Slider {...settings}>
        {/* Slide 1 */}
        <div>
          <div className="relative">
            <img
              src={Image1}
              alt="VWIN Express Truck"
              className="w-full h-screen object-cover"
            />
            <div className="absolute top-1/4 left-8 sm:left-16 text-white">
              <h6 className="text-sm sm:text-lg font-semibold">
                WE HAVE A SOLID BACKGROUND
              </h6>
              <h2 className="text-3xl sm:text-5xl font-bold leading-tight mt-2 sm:mt-4">
                RELIABILITY AND SIMPLICITY
              </h2>
              <p className="text-sm sm:text-xl mt-2 sm:mt-4">
                No booking required with our daily designated pickup times.
                <br />
                An easy-to-use system which frees you up to focus on your core business and your customers.
              </p>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 mt-4 sm:mt-8 rounded-full">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div>
          <div className="relative">
            <img
              src={Image2}
              alt="Global Reach and Local Expertise"
              className="w-full h-screen object-cover"
            />
            <div className="absolute top-1/4 left-8 sm:left-16 text-white">
              <h6 className="text-sm sm:text-lg font-semibold">
                We are here to support you
              </h6>
              <h2 className="text-3xl sm:text-5xl font-bold leading-tight mt-2 sm:mt-4">
                Express Global Reach,<br />&amp; Valuable Local Expertise
              </h2>
              <p className="text-sm sm:text-xl mt-2 sm:mt-4">
                No booking required with our daily designated pickup times.
                <br />
                An easy-to-use system which frees you up to focus on your core business and your customers.
              </p>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 mt-4 sm:mt-8 rounded-full">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default HeroCarousel;
