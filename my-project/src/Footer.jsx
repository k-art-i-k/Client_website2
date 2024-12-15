import Aos from "aos";
import React, { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    Aos.init({
      duration: 1200,
      easing: "ease-in-out-cubic",
      once: true,
    });
  }, []);
  return (
    <footer className="bg-neutral-800 text-white py-4 mt-auto">
      <div className="text-center" data-aos="fade-up">
        <p>Copyrights © 2024 All Rights Reserved by <b className="text-indigo-500">V Win Express International</b></p>
      </div>
    </footer>
  );
};

export default Footer;
