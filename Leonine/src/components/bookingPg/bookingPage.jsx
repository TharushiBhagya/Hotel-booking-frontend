// BookingPage.jsx
import React from 'react';

const BookingPage = () => {
    return (
        <div className="bg-[#F4F6FF] min-h-screen flex items-center justify-center p-6">
            <form className="bg-white rounded-lg shadow-md p-4 w-full max-w-xl"> {/* Reduced padding */}
                <h2 className="text-3xl font-bold text-[#10375C] mb-4 text-center">Booking Form</h2>
                
                <div className="mb-3"> {/* Reduced margin-bottom */}
                    <label className="block mb-1 text-[#10375C] text-lg" htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        className="border border-[#EB8317] p-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F3C623] transition duration-200"
                        required
                    />
                </div>
                
                <div className="mb-3"> {/* Reduced margin-bottom */}
                    <label className="block mb-1 text-[#10375C] text-lg" htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        className="border border-[#EB8317] p-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F3C623] transition duration-200"
                        required
                    />
                </div>
                
                <div className="mb-3"> {/* Reduced margin-bottom */}
                    <label className="block mb-1 text-[#10375C] text-lg" htmlFor="checkInDate">Checked-In Date:</label>
                    <input
                        type="date"
                        id="checkInDate"
                        className="border border-[#EB8317] p-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F3C623] transition duration-200"
                        required
                    />
                </div>
                
                <div className="mb-3"> {/* Reduced margin-bottom */}
                    <label className="block mb-1 text-[#10375C] text-lg" htmlFor="checkOutDate">Checked-Out Date:</label>
                    <input
                        type="date"
                        id="checkOutDate"
                        className="border border-[#EB8317] p-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F3C623] transition duration-200"
                        required
                    />
                </div>
                
                <div className="mb-4"> {/* Kept margin-bottom the same for guests */}
                    <label className="block mb-2 text-[#10375C] text-lg" htmlFor="guests">Number of Guests:</label>
                    <input
                        type="number"
                        id="guests"
                        className="border border-[#EB8317] p-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F3C623] transition duration-200"
                        required
                    />
                </div>
                
                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="bg-[#F3C623] text-black px-6 py-2 rounded-lg shadow-md hover:bg-[#EB8317] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#10375C] focus:ring-opacity-50"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default BookingPage;
