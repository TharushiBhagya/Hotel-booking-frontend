import React from 'react';

const hotelServiceData = [
    {
        name: 'Free Wi-Fi',
        image: '/images/wifi.jpg', // Update with your image path
        description: 'Enjoy high-speed Wi-Fi access throughout the hotel, available for all guests.',
        features: ['High-Speed Internet', 'Unlimited Access', 'Available in All Rooms'],
    },
    {
        name: 'Free Parking',
        image: '/images/park.jpg', // Update with your image path
        description: 'Secure and complimentary parking for all hotel guests.',
        features: ['24/7 Security', 'Valet Parking Available', 'Easy Access'],
    },
    {
        name: 'Room Service',
        image: '/images/room.jpg', // Update with your image path
        description: 'Enjoy delicious meals and beverages delivered directly to your room, available 24/7.',
        features: ['In-Room Dining', 'Late-Night Menu', 'Special Dietary Options'],
    },
    {
        name: 'Swimming Pool',
        image: '/images/pool.jpeg', // Update with your image path
        description: 'Relax and unwind in our outdoor swimming pool, perfect for a refreshing dip.',
        features: ['Sun Loungers', 'Pool Bar', 'Towels Provided'],
    },
    {
        name: 'Fitness Center',
        image: '/images/fit.jpg', // Update with your image path
        description: 'Stay active during your stay with access to our fully equipped fitness center.',
        features: ['Cardio Equipment', 'Weights', 'Personal Training Available'],
    },
    {
        name: 'Spa Services',
        image: '/images/spa.jpg', // Update with your image path
        description: 'Indulge in our relaxing spa services, including massages and beauty treatments.',
        features: ['Massage Therapy', 'Facials', 'Wellness Packages'],
    },
    {
        name: 'Concierge Service',
        image: '/images/concierge.jpg', // Update with your image path
        description: 'Our concierge team is here to assist with reservations, local tips, and transportation.',
        features: ['Tour Bookings', 'Restaurant Reservations', 'Transportation Arrangements'],
    },
    {
        name: 'Business Center',
        image: '/images/busi.jpg', // Update with your image path
        description: 'Access our business center equipped with computers, printers, and meeting rooms.',
        features: ['Free Printing', 'Meeting Room Reservations', 'High-Speed Internet'],
    },
];

export default function Services() {
    return (
        <div className="bg-[#F4F6FF] p-6">
            <div className="bg-[#F3C623] p-6 rounded-lg mb-6">
                <h2 className="text-[#10375C] text-3xl font-bold mb-6">Hotel Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {hotelServiceData.map((service, index) => (
                        <div 
                            key={index} 
                            className="bg-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105"
                        >
                            <img src={service.image} alt={service.name} className="w-full h-48 object-cover rounded-t-lg" />
                            <h3 className="text-xl font-semibold mt-4">{service.name}</h3>
                            <p className="text-gray-600 mb-4">{service.description}</p>
                            <h4 className="font-semibold">Features:</h4>
                            <ul className="list-disc list-inside text-gray-600 mb-4">
                                {service.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
