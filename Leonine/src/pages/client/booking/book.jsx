// BookingPage.jsx
import React from 'react';

const BookingPage = () => {
    return (
        <div className="container mx-auto p-6">
            <h2 className="text-2xl mb-4">Booking Form</h2>
            <form>
                <div className="mb-4">
                    <label className="block mb-2" htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        className="border border-gray-300 p-2 w-full"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2" htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        className="border border-gray-300 p-2 w-full"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2" htmlFor="date">Date:</label>
                    <input
                        type="date"
                        id="date"
                        className="border border-gray-300 p-2 w-full"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2" htmlFor="guests">Number of Guests:</label>
                    <input
                        type="number"
                        id="guests"
                        className="border border-gray-300 p-2 w-full"
                        required
                    />
                </div>
                <div className="flex justify-end">
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default BookingPage;
