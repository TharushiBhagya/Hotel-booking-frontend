import React from 'react';

const AboutUs = () => {
    return (
        <div className="bg-[#F4F6FF]">
            <header className="text-center p-6 bg-[#F3C623]">
                <h1 className="text-4xl font-bold text-[#10375C]">About Us</h1>
                <p className="text-lg text-[#10375C] mt-2">Discover our story and commitment to excellence</p>
            </header>

            <main className="max-w-6xl mx-auto p-6">
                
                <section className="flex-1 bg-white p-6 rounded-lg shadow-md flex items-center">
                        <div className="md:w-3/4">
                            <h2 className="text-3xl font-semibold text-[#10375C]">Our Story</h2>
                            <p className="text-lg text-[#10375C] mt-4">
                                Welcome to Leonine Villa, where luxury meets comfort. Founded in 2010, we are dedicated to providing our guests with the finest experiences, blending warm hospitality with exceptional services. Our hotel is located in the heart of Kalutara, surrounded by stunning views and vibrant culture.
                            </p>
                        </div>
                        <img 
                            src="images/v16.jpeg" 
                            alt="Hotel Exterior" 
                            className="w-1/4 rounded-lg shadow-lg object-cover ml-6 hidden md:block" 
                        />
                    </section>

                    {/* Our Vision Section */}
                    <section className="flex-1 bg-[#F3C623] p-6 rounded-lg shadow-md flex items-center">
                        <img 
                            src="images/e3.jpg" 
                            alt="Vision Image" 
                            className="w-1/4 rounded-lg shadow-lg object-cover mr-6 hidden md:block" 
                        />
                        <div className="md:w-3/4">
                            <h2 className="text-3xl font-semibold text-[#10375C]">Our Vision</h2>
                            <p className="text-lg text-[#10375C] mt-4">
                                At Leonine Villa, we strive to create unforgettable moments for our guests. Our vision is to be a leader in hospitality, ensuring every guest feels at home while enjoying world-class amenities and services. We are committed to sustainability and supporting our local community.
                            </p>
                        </div>
                    </section>

                {/* Gallery Section */}
                <section className="mt-10">
                   
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                        {[
                            "images/h3.jpg",
                            "images/h4.jpg",
                            "images/h8.jpg",
                        ].map((src, index) => (
                            <div key={index} className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-700 transform hover:scale-105">
                                <img 
                                    src={src} 
                                    alt={`Gallery Image ${index + 1}`} 
                                    className="w-full h-full object-cover" 
                                />
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
};

export default AboutUs;
