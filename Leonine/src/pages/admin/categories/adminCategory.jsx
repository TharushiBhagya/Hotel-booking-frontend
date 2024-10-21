import React from 'react';

export default function AdminCategories() {
    const roomCategories = [
        {
            name: "Deluxe Room",
            description: "A spacious room with luxury amenities.",
            pricePerNight: 150,
            amenities: ["Wi-Fi", "Air Conditioning", "Minibar"],
            availability: true,
            image: "/images/d1.jpg",
        },
        {
            name: "Standard Room",
            description: "Comfortable room for a pleasant stay.",
            pricePerNight: 100,
            amenities: ["Wi-Fi", "TV"],
            availability: false,
            image: "/images/d2.jpeg",
        },
        {
            name: "Suite",
            description: "Elegant suite with a living area.",
            pricePerNight: 200,
            amenities: ["Wi-Fi", "Air Conditioning", "Room Service"],
            availability: true,
            image: "/images/r1.jpg",
        },
    ];

    return (
        <div className="min-h-screen bg-[#F4F6FF] p-8">
            <h1 className="text-4xl font-bold text-[#10375C] mb-8 text-center">Room Categories</h1>
            <div className="bg-white shadow-xl rounded-lg p-6">
                <div className="mb-6">
                    <h2 className="text-2xl font-semibold text-[#EB8317]">Manage Room Categories</h2>
                </div>

                {/* Room Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {roomCategories.map((room, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-lg p-4 border border-gray-300 hover:shadow-2xl transition duration-300">
                            <img src={room.image} alt={room.name} className="w-full h-48 object-cover rounded-t-lg mb-4" />
                            <h3 className="text-xl font-bold text-[#10375C]">{room.name}</h3>
                            <p className="text-gray-600 mb-2">{room.description}</p>
                            <p className="text-lg font-semibold text-[#EB8317]">${room.pricePerNight} / night</p>
                            <p className="text-sm text-gray-500">Amenities: {room.amenities.join(', ')}</p>
                            <p className={`text-sm font-medium ${room.availability ? 'text-green-600' : 'text-red-600'}`}>
                                {room.availability ? "Available" : "Not Available"}
                            </p>
                            <div className="mt-4 flex justify-between">
                                <button className="text-[#EB8317] hover:underline">Edit</button>
                                <button className="text-red-600 hover:underline">Delete</button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Add New Room Section */}
                <div className="mt-8">
                    <h2 className="text-2xl font-semibold text-[#EB8317] mb-4">Add New Room</h2>
                    <form className="bg-[#F4F6FF] p-6 shadow-md rounded-lg border border-[#F3C623]">
                        <div className="mb-4">
                            <label className="block text-[#10375C] font-semibold">Name:</label>
                            <input type="text" className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-[#F3C623] transition" placeholder="Enter room name" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-[#10375C] font-semibold">Description:</label>
                            <textarea className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-[#F3C623] transition" rows="3" placeholder="Enter room description"></textarea>
                        </div>
                        <div className="mb-4">
                            <label className="block text-[#10375C] font-semibold">Price Per Night ($):</label>
                            <input type="number" className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-[#F3C623] transition" placeholder="Enter price" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-[#10375C] font-semibold">Amenities (comma separated):</label>
                            <input type="text" className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-[#F3C623] transition" placeholder="Wi-Fi, Air Conditioning" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-[#10375C] font-semibold">Availability:</label>
                            <select className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-[#F3C623] transition">
                                <option value="true">Available</option>
                                <option value="false">Not Available</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="block text-[#10375C] font-semibold">Image URL:</label>
                            <input type="text" className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-[#F3C623] transition" placeholder="Enter image URL" />
                        </div>
                        <button className="bg-[#F3C623] text-white py-2 px-4 rounded-lg hover:bg-[#EB8317] transition duration-200">Add Room</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
