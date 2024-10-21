import React, { useState, useEffect } from "react";
import Header from "../../../components/header/header";

const images = [
    "/images/v10.jpg",
    "/images/v1.jpg",
    "/images/v3.jpg",
    "/images/v6.jpg",
    "/images/v4.jpg",
    "/images/v9.jpg"
];

export default function HomePage() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval); // Clean up interval on unmount
    }, []);

    return (
        <>
            <Header />
            <div className="w-full h-screen bg-blue-900 flex flex-col items-center pt-20">
                
                <div className="relative w-full h-full overflow-hidden">
                    <img
                        src={images[currentIndex]}
                        alt="Villa"
                        className="object-cover w-full h-full transition-opacity duration-700"
                    />
                </div>
            </div>
        </>
    );
}
