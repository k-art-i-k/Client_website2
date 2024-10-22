import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function FromSection(obj) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isFormValid, setIsFormValid] = useState(true); // State to track form validity

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if form is valid
    const form = e.target;
    const name = form.elements.name.value.trim();
    const email = form.elements.email.value.trim();
    const subject = form.elements.subject.value.trim();
    const message = form.elements.message.value.trim();

    if (!name || !email || !subject || !message) {
      // If any of the fields are empty, set form validity to false
      setIsFormValid(false);
      return; // Don't proceed with form submission
    }

    // Here you can add logic to send the email
    // For demonstration, I'll just set isSubmitted to true
    let userFormData = { name, email, subject, message };
    const service_id = "service_rasup57";
    const temple_id = "template_4dn3s6k";
    const public_key = "aPBI9980l4fvsy2Xh";
    console.log(name, email, subject, message);
    const templateParams = {
      form_name: "Rx",
      reply_to: "rj187225@gmail.com",
      from_email: "rj187225@gmail.com",
      to_name: "Rupesh",
      message: `Name : ${name} Email: ${email} Subject: ${subject} Message : ${message}`,
    };
    emailjs
      .send(service_id, temple_id, templateParams, public_key)
      .then((response) => {
        setIsSubmitted(true);
      })
      .catch((err) => {
        setIsFormValid(true); // Reset form validity
        console.log(userFormData);
      });

    console.log("i am contact");
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto bg-gray-300 shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email Address:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="subject"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Subject:
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Your Message:
          </label>
          <textarea
            id="message"
            name="message"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          ></textarea>
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Send Message
          </button>
        </div>
        {!isFormValid && (
          <div className="bg-red-500 text-white px-4 py-2 mt-4 rounded">
            Please fill in all fields.
          </div>
        )}
        {isSubmitted && (
          <div className="bg-green-500 text-white px-4 py-2 mt-4 rounded">
            Email has been sent to the owner.
          </div>
        )}
      </form>
    </div>
  );
}