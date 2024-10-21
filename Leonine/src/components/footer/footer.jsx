import React from 'react';

function Footer() {
    return (
        <footer className="bg-black text-white py-10">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <img src="/images/Leonine.png" alt="Leonine Villa" className="mb-4 w-32" />
                    <p className="mb-2">+94 72 780 0500</p>
                </div>
                <div>
                    <h3 className="font-semibold text-xl mb-4">Our Links</h3>
                    <ul className="space-y-2">
                        <li><a href="#home" className="hover:text-gray-400">Home</a></li>
                        <li><a href="#about" className="hover:text-gray-400">About</a></li>
                        <li><a href="#rooms" className="hover:text-gray-400">Our Rooms</a></li>
                        <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
                        <li><a href="#blog" className="hover:text-gray-400">Blog</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold text-xl mb-4">Our Services</h3>
                    <ul className="space-y-2">
                        <li>Luxury Accommodation</li>
                        <li>Jungle Pool</li>
                        <li>Luxury Accommodation</li>
                        <li>Restaurant</li>
                        <li>Spa and Wellness</li>
                        <li>Adventure Activities</li>
                        <li>Room Service</li>
                        <li>Private Events and Weddings</li>
                    </ul>
                </div>
            </div>
            <div className="container mx-auto px-6 text-center mt-8">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509555!2d144.9537353153162!3d-37.81627927975159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577403ec970c1b8!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2s!4v1600000000000!5m2!1sen!2s"
                    width="100%"
                    height="300"
                    allowFullScreen=""
                    loading="lazy"
                    className="mt-8"
                    title="Live Map"
                ></iframe>
            </div>
            <div className="bg-black text-gray-500 text-center py-4 mt-8">
                <p>Copyright © Code 2024. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
