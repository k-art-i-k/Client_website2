import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Anna from '../assets/anna.jpeg';
import Joe from '../assets/Joe.jpeg';
import Tom from '../assets/imgres.jpeg';





const reviews = [
    {
        id: 1,
        name: "Tom DeLonge",
        role: "Logistics Manager, Leading Manufacturing Firm",
        review:
           "V Win Express International’s seamless import solutions helped us streamline our global supply chain. Their MENA region expertise is unmatched!",
        image: Tom,
    },
    {
        id: 2,
        name: "Anna Smith",
        role: "Owner, Online Retail Business",
        review:
          "With V Win Express, we never worry about our eCommerce shipments. Their domestic courier service has been a perfect fit!",
        image: Anna, 
    },
    {
        id: 3,
        name: "John Doe",
        role: "Operations Head, Pharmaceutical Company",
        review:
           "Their professionalism in handling critical cargo is remarkable. V Win Express ensures every shipment is secure and on time.",
        image: Joe,
    },
];

const ReviewSlider = () => {
    const responsive = {
        0: { items: 1 },
        768: { items: 1 },
        1024: { items: 1 },
    };

    const renderItems = reviews.map((review) => (
        <div className="text-center space-y-4">
            <p className="text-white text-lg">{review.review}</p>
            <h3 className="text-yellow-400 font-bold">{review.name}</h3>
            <p className="text-gray-400">{review.role}</p>
            <img
                src={review.image}
                alt={review.name}
                className="w-20 h-20 rounded-full  mx-auto border-4 border-yellow-400"
            />
        </div>
    ));

    return (
        <div className="bg-gray-900 py-10 px-4 border-4 border-indigo-500">
            <h2 className="text-yellow-400 text-2xl font-bold text-center mb-6">
                What Our Client Says
            </h2>
            <div className="relative">
                <AliceCarousel
                    mouseTracking
                    items={renderItems}
                    responsive={responsive}
                    controlsStrategy="alternate"
                    renderPrevButton={() => (
                        <button className="absolute left-1 top-1/2 transform translate-y-28 md:translate-y-6 px-3 py-2 bg-gray-700 text-white rounded-full z-10">
                            Prev
                        </button>
                    )}
                    renderNextButton={() => (
                        <button className="absolute right-1 top-1/2 transform translate-y-28 md:translate-y-6 px-3 py-2 bg-gray-700 text-white rounded-full z-10">
                            Next
                        </button>
                    )}
                    infinite
                />
            </div>


        </div>
    );
};

export default ReviewSlider;

