import React from 'react';

function MapComponent() {
  return (
    <div className="overflow-hidden rounded-lg">
      <iframe
        title="Location Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.064469972679!2d72.87909457395178!3d19.10482745106943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c86c6fffffff%3A0xf2ec0c89ff9504f!2sV%20Win%20Express%20International!5e0!3m2!1sen!2sin!4v1729614371118!5m2!1sen!2sin"
        className="w-full h-64 sm:h-72 md:h-96 lg:h-[450px] xl:h-[500px] 2xl:h-[600px]"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default MapComponent;
