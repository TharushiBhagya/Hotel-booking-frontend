import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome

export default function Contact() {
    return (
        <div className="bg-[#F4F6FF] p-6">
            {/* Yellow Bar for Contact Us Header */}
            <div className="bg-[#F3C623] p-4 rounded-t-lg">
                <h2 className="text-[#10375C] text-3xl font-bold">Contact Us</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Contact Form */}
                <div className="bg-white shadow-lg rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700" htmlFor="name">Name</label>
                            <input 
                                type="text" 
                                id="name" 
                                className="w-full p-2 border border-gray-300 rounded" 
                                placeholder="Your Name" 
                                required 
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700" htmlFor="email">Email</label>
                            <input 
                                type="email" 
                                id="email" 
                                className="w-full p-2 border border-gray-300 rounded" 
                                placeholder="Your Email" 
                                required 
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700" htmlFor="message">Message</label>
                            <textarea 
                                id="message" 
                                className="w-full p-2 border border-gray-300 rounded" 
                                placeholder="Your Message" 
                                rows="4" 
                                required 
                            />
                        </div>
                        <button 
                            type="submit" 
                            className="bg-[#EB8317] text-white py-2 px-4 rounded transition duration-300 hover:bg-[#D67514]"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Contact Information */}
                <div className="bg-white shadow-lg rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                    <div className="flex items-center mb-2">
                        <i className="fas fa-map-marker-alt text-[#F3C623] mr-3"></i>
                        <p className="text-gray-600"><strong>Address:</strong> 1234 Main St, Your City, Your Country</p>
                    </div>
                    <div className="flex items-center mb-2">
                        <i className="fas fa-phone-alt text-[#F3C623] mr-3"></i>
                        <p className="text-gray-600"><strong>Phone:</strong> +1 234 567 890</p>
                    </div>
                    <div className="flex items-center mb-2">
                        <i className="fas fa-envelope text-[#F3C623] mr-3"></i>
                        <p className="text-gray-600"><strong>Email:</strong> contact@yourdomain.com</p>
                    </div>
                    <div className="flex items-center mb-2">
                        <i className="fas fa-clock text-[#F3C623] mr-3"></i>
                        <p className="text-gray-600"><strong>Working Hours:</strong> Mon - Fri, 9 AM - 5 PM</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
