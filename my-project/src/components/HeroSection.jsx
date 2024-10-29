import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image1 from '../assets/Banner1n.jpg';
import Image2 from '../assets/Banner2n.jpg';
import { Link } from "react-router-dom";

// Custom Arrow Components
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} right-5 z-20`} 
      style={{ ...style, display: "block", background: "rgba(0, 0, 0, 0.5)", borderRadius: '50%' }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} left-5 z-20`} 
      style={{ ...style, display: "block", background: "rgba(0, 0, 0, 0.5)", borderRadius: '50%' }}
      onClick={onClick}
    />
  );
};

const HeroCarousel = () => {
  const [settings, setSettings] = useState({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  });

  useEffect(() => {
    const updateSettings = () => {
      setSettings((prevSettings) => ({
        ...prevSettings,
        arrows: window.innerWidth >= 640, // Hide arrows if screen width is less than 640px
      }));
    };

    updateSettings(); // Set initial setting based on current screen width
    window.addEventListener("resize", updateSettings);

    return () => window.removeEventListener("resize", updateSettings);
  }, []);

  return (
    <div className="relative w-full overflow-hidden mt-20 md:mt-36" id="hero-section">
      <div className="absolute top-1/4 left-8 sm:left-16 text-white z-10">
        <h6 className="text-sm text-gray-200 md:text-lg font-bold">
          WE HAVE A SOLID BACKGROUND
        </h6>
        <h2 className="text-2xl md:text-5xl font-bold leading-tight mt-2 sm:mt-4">
          RELIABILITY AND SIMPLICITY
        </h2>
        <p className=" text-xs md:text-xl mt-2 sm:mt-4">
          No booking required with our daily designated pickup times.
          <br />
          An easy-to-use system which frees you up to focus on your core business and your customers.
        </p>
        <Link to="/services">
          <button 
            className="bg-indigo-900 hover:bg-white text-white hover:text-indigo-900 font-bold py-1 px-3 sm:py-3 sm:px-6 mt-4 sm:mt-8 rounded-full text-xs md:text-base"
          >
            LEARN MORE
          </button>
        </Link>
      </div>

      {/* Slider with Images */}
      <Slider {...settings} className="relative">
        <div>
          <img
            src={Image1}
            alt="VWIN Express Truck"
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-fill"
          />
          <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        </div>
        <div>
          <img
            src={Image2}
            alt="Global Reach and Local Expertise"
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-5"></div>
        </div>
      </Slider>
    </div>
  );
};

export default HeroCarousel;
