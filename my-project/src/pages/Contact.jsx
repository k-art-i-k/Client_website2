import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import MapComponent from "../components/Contact/MapComponent";

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
    console.log("Form Data Submitted:", formData); // Check the form data

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          console.log(result.text);
          setFormData({
            user_name: "",
            user_email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          console.error("EmailJS Error:", error.text); // Log the error
          alert("Failed to send message, please try again.");
        }
      );
  };

  return (
    <div className="font-roboto mt-20 md:mt-36 bg-gray-200">
      <div className="relative">
        {/* Background Image */}
        <img
          alt="A worker in protective gear holding a walkie-talkie"
          className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
          src="https://storage.googleapis.com/a1aa/image/P3smQnaTptYDClRIiaNgUcJJNnU1ZEq5OkatTx3Of8wDCL0JA.jpg"
          width={1600}
          height={600}
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-2 font-bold">
            Contact Us
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-lg ">
            We are here to assist you
          </p>
        </div>
      </div>

      <div className="bg-gray-200">
        <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-12 p-8">
          {/* Phone Section */}
          <div className="bg-gray-100 p-8 md:p-12 rounded-lg shadow-xl  shadow-indigo-400  text-center w-full md:w-[28rem] h-auto flex flex-col items-center transition-transform transform hover:scale-105 shadow-xl  shadow-indigo-400 ">
            <FaPhoneAlt className="text-4xl md:text-5xl text-blue-900 mb-4" />
            <h2 className="text-2xl md:text-4xl font-bold">Phone</h2>
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

          {/* Email Section */}
          <div className="bg-gray-100 p-8 md:p-12 rounded-lg shadow-xl  shadow-indigo-400 text-center w-full md:w-[28rem] h-auto flex flex-col items-center transition-transform transform hover:scale-105">
            <FaEnvelope className="text-4xl md:text-5xl text-blue-900 mb-4" />
            <h2 className="text-2xl md:text-4xl font-bold">Email</h2>
            <p className="text-gray-600 text-lg md:text-2xl font-bold mb-4">
              Contact us on our email
            </p>

            <p className="text-blue-900 text-md md:text-lg font-semibold">
              ops@v-winexpress.com <br />
              info@v-winexpress.com <br />
              vwinexpress@gmail.com
            </p>
          </div>

          {/* Address Section */}
          <div className="bg-gray-100 p-8 md:p-12 rounded-lg shadow-xl  shadow-indigo-400 text-center w-full md:w-[28rem] h-auto flex flex-col items-center transition-transform transform hover:scale-105">
            <FaMapMarkerAlt className="text-4xl md:text-5xl text-blue-900 mb-4" />
            <h2 className="text-2xl md:text-4xl font-bold">Address</h2>
            <p className="text-gray-600 text-lg md:text-2xl font-bold mb-4">
              Visit us at our office
            </p>
            <p className="text-blue-900 text-md md:text-base font-semibold mb-2">
              Bharateeya Kala Mandal, Ground Level, C/2- A , No:3, OM Nagar Near
              J.B.Nagar, Andheri East, Mumbai-400 099.
            </p>
          </div>
        </div>
      </div>

      {/* Flexbox layout for Map and Form */}
      <div className="flex flex-col md:flex-row justify-center items-center bg-gray-100 border-4 border-x-4  shadow-xl  shadow-neutral-600 rounded-lg p-4 max-w-6xl mx-auto my-6 md:min-h-[700px]">
        {/* Map Section */}
        <div className="w-full md:w-1/2 h-[300px] md:h-[600px] relative">
          <MapComponent />
        </div>

        {/* Contact Form */}
        <div className="w-full md:w-1/2 md:ml-10  md:mt-0">
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
              className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md  md:w-auto"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
