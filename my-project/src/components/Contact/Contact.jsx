import React, { useState } from "react";
import MapComponent from "./MapComponent";
import FromSection from "./FromSection";
import emailjs from "@emailjs/browser";

export default function Contact() {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [subject, setsubject] = useState("");
  let [message, setmessage] = useState("");
  let [userFormData, setUserFormData] = useState();

  const handleForm = (e) => {
    e.preventDefault();
    const service_id = "service_rasup57";
    const temple_id = "template_4dn3s6k";
    const public_key = "aPBI9980l4fvsy2Xh";
    const templateParams = {
      form_name: "Rx",
      reply_to: "rj187225@gmail.com",
      from_email: "rj187225@gmail.com",
      to_name: "Rupesh",
      message: "asdsadd",
    };
    emailjs
      .send(service_id, temple_id, templateParams, public_key)
      .then((response) => {
        console.log("email sent successfully ", response);
        alert("message sent successfully");
      });
  };

  return (
    <div className="mt-2 bg-slate-100 p-4 md:p-8 lg:p-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
        {/* Left Side - Contact Details and Map */}
        <div className="mb-3 py-4">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-3">
            Have Questions?
          </h3>
          <p className="text-base md:text-lg mb-6">
            Please feel free to call or email us, or use our contact form to get
            in touch with us. We look forward to hearing from you!
          </p>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-3">
            Emergency? Call Us:
          </h3>
          <p className="text-base md:text-lg mb-6">+91 76699 17474</p>

          <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-3">
            Send Us Mail
          </h3>
          <p className="text-base md:text-lg mb-6">info@example.com</p>

          <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-3">
            Find the Studio
          </h3>

          {/* Map Component */}
          <div className="w-full h-[300px] md:h-[400px] lg:h-[500px] mt-4">
            <MapComponent />
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="w-full lg:w-11/12 xl:w-3/4 mx-auto">
          <FromSection />
        </div>
      </div>

      {/* Reduce Space below on larger screens */}
      <div className="h-0 lg:h-12 xl:h-24"></div>
    </div>
  );
}
