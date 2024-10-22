import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_y7wjuxp",
        "template_fprk6oe",
        form.current,
        "OPpyHSV2t0511iXjf"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          setFormData({
            user_name: "",
            user_email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message, please try again.");
        }
      );
  };

  useEffect(() => {
    // Load Google Maps API script
    const googleMapsScript = document.createElement("script");
    googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&callback=initMap`;
    googleMapsScript.async = true;
    window.initMap = initMap; // make sure initMap is available globally
    document.body.appendChild(googleMapsScript);

    // Initialize the map
    function initMap() {
      const location = { lat: 19.076, lng: 72.8777 }; // Company's latitude and longitude (Mumbai example)
      const map = new window.google.maps.Map(document.getElementById("map"), {
        center: location,
        zoom: 14, // Adjust zoom level to your preference
      });

      // Add a marker to the company's location
      new window.google.maps.Marker({
        position: location,
        map: map,
        title: "Our Office Location",
      });
    }

    return () => {
      // Clean up: remove the script and the global initMap
      document.body.removeChild(googleMapsScript);
      delete window.initMap;
    };
  }, []);

  return (
    <div className="font-roboto mt-20 md:mt-36">
  

      <div className="font-roboto mt-20 md:mt-36">
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

        <div className="bg-white">
          <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-12 p-8">
            {/* Phone Section */}
            <div className="bg-gray-100 p-12 rounded-lg shadow-md text-center w-full md:w-[28rem] h-96 flex flex-col justify-start items-center">
              <div className="flex flex-col justify-center items-center mb-4">
                <div className="text-4xl md:text-5xl text-blue-900 mb-4">
                  <FaPhoneAlt />
                </div>
                <h2 className="text-2xl md:text-4xl font-bold">Phone</h2>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-gray-600 text-lg md:text-2xl font-bold mb-4">
                  Contact us on our number
                </p>
                <p className="text-blue-900 text-md md:text-xl font-semibold mb-2">
                  +91 9768703115
                </p>
                <p className="text-blue-900 text-md md:text-xl font-semibold">
                  +91 9833066922
                </p>
              </div>
            </div>

            {/* Email Section */}
            <div className="bg -gray-100 p-12 rounded-lg shadow-md text-center w-full md:w-[28rem] h-96 flex flex-col justify-start items-center">
              <div className="flex flex-col justify-center items-center mb-4">
                <div className="text-4xl md:text-5xl text-blue-900 mb-4">
                  <FaEnvelope />
                </div>
                <h2 className="text-2xl md:text-4xl font-bold">Email</h2>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-gray-600 text-lg md:text-2xl font-bold mb-4">
                  Contact us on our email
                </p>
                <p className="text-blue-900 text-md md:text-xl font-semibold mb-2">
                  info@yourdomain.com
                </p>
                <p className="text-blue-900 text-md md:text-xl font-semibold">
                  support@yourdomain.com
                </p>
              </div>
            </div>

            {/* Address Section */}
            <div className="bg-gray-100 p-12 rounded-lg shadow-md text-center w-full md:w-[28rem] h-96 flex flex-col justify-start items-center">
              <div className="flex flex-col justify-center items-center mb-4">
                <div className="text-4xl md:text-5xl text-blue-900 mb-4">
                  <FaMapMarkerAlt />
                </div>
                <h2 className="text-2xl md:text-4xl font-bold">Address</h2>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-gray-600 text-lg md:text-2xl font-bold mb-4">
                  Visit us at our office
                </p>
                <p className="text-blue-900 text-md md:text-xl font-semibold mb-2">
                  123, ABC Street, Mumbai, India
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 border-4 shadow-2xl rounded-lg p-10 max-w-6xl mx-auto my-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center text-blue-900">
            Send us a message
          </h2>
          <p className="text-center text-gray-600 mb-8">
            FEEL FREE TO SEND US A MESSAGE NOW!
          </p>
          <form ref={form} className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="user_name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  value={formData.user_name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="user_email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="user_email"
                  name="user_email"
                  value={formData.user_email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="5"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md w-full md:w-auto"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      {/* Map Section */}
      <div className="w-full h-[500px] md:h-[700px] relative mt-10">
        <div id="map" className="absolute inset-0 w-full h-full"></div>
      </div>
    </div>
  );
};

export default Contact;
