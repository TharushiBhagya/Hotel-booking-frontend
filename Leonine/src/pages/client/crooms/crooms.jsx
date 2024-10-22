import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome

const roomData = [
    {
        category: 'Standard',
        images: ["images/r1.jpg", "images/r3.jpg"], // Two images for slideshow
        description: 'Comfortable and affordable, our standard rooms offer all the essentials for a pleasant stay. Perfect for budget travelers.',
        features: ['Queen Bed', 'Free Wi-Fi', 'Breakfast Included', 'Air Conditioning'],
        maxGuests: 3,
        status: 'available',
    },
    {
        category: 'Deluxe',
        images: ["images/l2.jpg", "images/l1.jpg"], // Two images for slideshow
        description: 'Experience luxury and comfort in our deluxe rooms, featuring modern amenities and spacious interiors.',
        features: ['King Bed', 'Free Wi-Fi', 'Mini Bar', 'Room Service'],
        maxGuests: 2,
        status: 'available',
    },
    {
        category: 'Luxury',
        images: ["images/d2.jpeg", "images/d1.jpg"], // Two images for slideshow
        description: 'Indulge in opulence with our luxury rooms, offering breathtaking views and premium amenities for a memorable stay.',
        features: ['King Bed', 'Ocean View', 'Private Balcony', 'Butler Service'],
        maxGuests: 2,
        status: 'underMaintenance', // Example status; change as needed
    },
];

export default function Rooms() {
    const [selectedRoom, setSelectedRoom] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleRoomSelect = (category) => {
        setSelectedRoom(roomData.find(room => room.category === category));
        setCurrentImageIndex(0); // Reset to first image
    };

    const handleNextImage = () => {
        if (selectedRoom) {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % selectedRoom.images.length);
        }
    };

    const handlePrevImage = () => {
        if (selectedRoom) {
            setCurrentImageIndex((prevIndex) => (prevIndex - 1 + selectedRoom.images.length) % selectedRoom.images.length);
        }
    };

    return (
        <div className="bg-[#F4F6FF] p-6">
            {/* Yellow Panel for Room Categories */}
            <div className="bg-[#F3C623] p-6 rounded-lg mb-6">
                <h2 className="text-[#10375C] text-3xl font-bold mb-6">Room Categories</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {roomData.map((room) => (
                        <div 
                            key={room.category} 
                            className="bg-white shadow-lg rounded-lg p-4 cursor-pointer transition-transform transform hover:scale-105"
                            onClick={() => handleRoomSelect(room.category)}
                        >
                            <img src={room.images[0]} alt={room.category} className="w-full h-40 object-cover rounded-t-lg" />
                            <h3 className="text-xl font-semibold mt-4">{room.category}</h3>
                            <p className="text-gray-600">{room.description}</p>
                            <button 
                                className="mt-2 text-[#EB8317] font-semibold"
                            >
                                View More
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {selectedRoom && (
                <div className="mt-8 p-6 bg-white shadow-lg rounded-lg">
                    <h3 className="text-2xl font-bold mb-4">{selectedRoom.category} Room Details</h3>

                    {/* Slideshow for Room Images */}
                    <div className="relative">
                        <img src={selectedRoom.images[currentImageIndex]} alt={selectedRoom.category} className="w-full h-80 object-cover rounded-lg mb-4" /> {/* Increased height */}
                        <button
                            onClick={handlePrevImage}
                            className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white bg-[#10375C] rounded-full p-2 hover:bg-[#EB8317]"
                        >
                            &lt;
                        </button>
                        <button
                            onClick={handleNextImage}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white bg-[#10375C] rounded-full p-2 hover:bg-[#EB8317]"
                        >
                            &gt;
                        </button>
                    </div>

                    <p className="text-gray-600 mb-4">{selectedRoom.description}</p>
                    <h4 className="font-semibold">Features:</h4>
                    <ul className="list-disc list-inside text-gray-600 mb-4">
                        {selectedRoom.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                    <p className="font-semibold">Max Guests: <span className="text-gray-600">{selectedRoom.maxGuests}</span></p>
                    <p className="font-semibold">Status: <span className={`text-${selectedRoom.status === 'available' ? 'green-500' : selectedRoom.status === 'underMaintenance' ? 'red-500' : 'gray-500'}`}>{selectedRoom.status}</span></p>
                </div>
            )}
        </div>
    );
}
