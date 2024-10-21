import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube, FaWhatsapp } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="bg-black text-white py-6 relative">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                        <li>Restaurant</li>
                        <li>Spa and Wellness</li>
                        <li>Adventure Activities</li>
                        <li>Room Service</li>
                        <li>Private Events and Weddings</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold text-xl mb-4">Follow Us</h3>
                    <div className="flex space-x-4 text-2xl mb-4">
                        <a href="https://www.facebook.com" className="hover:text-gray-400 text-blue-600" aria-label="Facebook"><FaFacebookF /></a>
                        <a href="https://www.instagram.com" className="hover:text-gray-400 text-pink-500" aria-label="Instagram"><FaInstagram /></a>
                        <a href="https://www.twitter.com" className="hover:text-gray-400 text-blue-400" aria-label="Twitter"><FaTwitter /></a>
                        <a href="https://www.linkedin.com" className="hover:text-gray-400 text-blue-700" aria-label="LinkedIn"><FaLinkedinIn /></a>
                        <a href="https://www.youtube.com" className="hover:text-gray-400 text-red-600" aria-label="YouTube"><FaYoutube /></a>
                        <a href="https://www.whatsapp.com" className="hover:text-gray-400 text-green-500" aria-label="WhatsApp"><FaWhatsapp /></a>
                    </div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509555!2d144.9537353153162!3d-37.81627927975159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577403ec970c1b8!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2s!4v1600000000000!5m2!1sen!2s"
                        width="100%"
                        height="200"
                        allowFullScreen=""
                        loading="lazy"
                        title="Live Map"
                        className="w-full h-auto"
                    ></iframe>
                </div>
            </div>

            <div className="container mx-auto px-6 flex flex-col lg:flex-row justify-between items-center mt-6 text-gray-500 text-sm">
                <img src="/images/Leonine.png" alt="Leonine Villa" className="mb-4 w-32 lg:mb-0 lg:mr-4" />
                <p className="mb-2 lg:mb-0">+94 72 780 0500</p>
                <p>Copyright © Code 2024. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
