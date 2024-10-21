import React, { useState, useEffect, useRef } from "react";
import Header from "../../../components/header/header";
import Footer from "../../../components/footer/footer";

// Slideshow images
const slideshowImages = [
    "/images/v10.jpg",
    "/images/v1.jpg",
    "/images/v3.jpg",
    "/images/v6.jpg",
    "/images/v4.jpg",
    "/images/v9.jpg",
];

// Content images
const contentImages = {
    amenities: "/images/v15.jpeg",
    location: "/images/v14.jpeg",
    events: "/images/v17.jpeg",
    reviews: "/images/v12.jpg",
};

export default function HomePage() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const footerRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slideshowImages.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval); // Clean up interval on unmount
    }, []);

    const handleBookNow = () => {
        alert("Booking now...");
    };

    return (
        <>
            <Header />
            {/* Slideshow Section */}
            <div className="w-full h-screen flex flex-col items-center pt-20">
                <div className="relative w-full h-full overflow-hidden">
                    <img
                        src={slideshowImages[currentIndex]}
                        alt="Villa"
                        className="object-cover w-full h-full transition-opacity duration-700"
                    />
                </div>
            </div>

            {/* Content Sections with Blue and Yellow Gradients */}
            <div className="bg-gradient-to-br from-[#1E3A8A] via-[#F3C623] to-[#EB8317] text-white py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-8">Welcome to Leonine Villa</h2>

                    {/* Content Section with Images */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {/* Luxurious Amenities Section */}
                        <div className="flex flex-col items-center bg-transparent">
                            <img
                                src={contentImages.amenities}
                                alt="Amenities"
                                className="w-full h-60 object-cover rounded-lg mb-4 transition-transform duration-700 transform hover:scale-105"
                            />
                            <h3 className="text-2xl font-semibold mb-2">Luxurious Amenities</h3>
                            <p className="text-center">
                                Experience unparalleled luxury with our exclusive amenities, including a private pool, spa, and fine dining.
                            </p>
                        </div>

                        {/* Prime Location Section */}
                        <div className="flex flex-col items-center bg-transparent">
                            <img
                                src={contentImages.location}
                                alt="Location"
                                className="w-full h-60 object-cover rounded-lg mb-4 transition-transform duration-700 transform hover:scale-105"
                            />
                            <h3 className="text-2xl font-semibold mb-2">Prime Location</h3>
                            <p className="text-center">
                                Nestled in the heart of nature, Leonine Villa offers breathtaking views and a serene environment.
                            </p>
                        </div>

                        {/* Perfect for Events Section */}
                        <div className="flex flex-col items-center bg-transparent">
                            <img
                                src={contentImages.events}
                                alt="Events"
                                className="w-full h-60 object-cover rounded-lg mb-4 transition-transform duration-700 transform hover:scale-105"
                            />
                            <h3 className="text-2xl font-semibold mb-2">Perfect for Events</h3>
                            <p className="text-center">
                                Host your dream event in our beautiful venue, designed to accommodate various occasions.
                            </p>
                        </div>

                        {/* Guest Reviews Section */}
                        <div className="flex flex-col items-center bg-transparent">
                            <img
                                src={contentImages.reviews}
                                alt="Reviews"
                                className="w-full h-60 object-cover rounded-lg mb-4 transition-transform duration-700 transform hover:scale-105"
                            />
                            <h3 className="text-2xl font-semibold mb-2">Guest Reviews</h3>
                            <p className="text-center">
                                Don't just take our word for it; hear from our satisfied guests who have enjoyed their stay at Leonine Villa.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer ref={footerRef} className="bg-blue-950 text-white text-center p-4" />
        </>
    );
}
