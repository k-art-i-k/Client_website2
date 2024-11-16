import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const reviews = [
    {
        id: 1,
        name: "Tom DeLonge",
        role: "CEO, Lexmark",
        review:
            "I am very satisfied with the services. Their team is very professional and efficient in completing our project on time and at a very affordable cost. The quality of their work is very good and I highly recommend this company for any construction project.",
        image: "https://via.placeholder.com/100", // Replace with actual image URL
    },
    {
        id: 2,
        name: "Anna Smith",
        role: "Manager, BuildCorp",
        review:
            "Fantastic work! The team delivered beyond our expectations and provided excellent support throughout the project.",
        image: "https://via.placeholder.com/100", // Replace with actual image URL
    },
    {
        id: 3,
        name: "John Doe",
        role: "Founder, ArchDesign",
        review:
            "Their professionalism and attention to detail are outstanding. I would recommend them to anyone looking for quality service.",
        image: "https://via.placeholder.com/100", // Replace with actual image URL
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
                className="w-20 h-20 rounded-full mx-auto border-4 border-yellow-400"
            />
        </div>
    ));

    return (
        <div className="bg-gray-900 py-10 px-4 border-4 border-red-500">
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

