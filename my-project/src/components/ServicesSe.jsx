import React from "react";
import Image1 from '../assets/Image1.png'
import Image2 from '../assets/Image2.png'
import Image3 from '../assets/Image3.png'

const OperationMode = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-white">
      <h2 className="text-center text-2xl font-bold mb-8">
        <span className="border-b-4 border-red-600 pb-1">Operation</span> Mode
      </h2>
      <div className="space-y-8">
        {/* Connect Section */}
        <div className="flex items-center space-x-8">

          <div className="flex-1">
            <div className="flex items-center mb-2">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-600 text-white font-bold mr-4">
                1
              </div>
              <h3 className="font-semibold text-xl">Connect</h3>
            </div>
            <p className="text-gray-600">
              You’re currently running your store on Shopify, WooCommerce, or
              any other platform. As a first step, you’ll connect your store
              with our platform.
            </p>
          </div>
          <div className="flex-1">
            <img
              src={Image1}
              alt="Connect"
              className="w-full h-60 object-contain"
            />
          </div>
        </div>

        {/* Store Section */}
        <div className="flex items-center space-x-8">
          <div className="flex-1">
            <img
              src={Image2}
              alt="Store"
              className="w-full h-60 object-contain"
            />
          </div>
          <div className="flex-1">
            <div className="flex items-center mb-2">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-600 text-white font-bold mr-4">
                2
              </div>
              <h3 className="font-semibold text-xl">Store</h3>
            </div>
            <p className="text-gray-600">
              Then, you can send us your inventory, and the fun begins. We'll
              choose a delivery day together so your fulfillment is not
              interrupted.
            </p>
          </div>
        </div>

        {/* Ship Section */}
        <div className="flex items-center space-x-8">

          <div className="flex-1">
            <div className="flex items-center mb-2">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-600 text-white font-bold mr-4">
                3
              </div>
              <h3 className="font-semibold text-xl">Ship</h3>
            </div>
            <p className="text-gray-600">
              We pick, pack, and ship all incoming orders directly from our own
              warehouse until 12 pm on the same day.
            </p>
          </div>
          <div className="flex-1">
            <img
              src={Image3}
              alt="Ship"
              className="w-full h-60 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OperationMode;
