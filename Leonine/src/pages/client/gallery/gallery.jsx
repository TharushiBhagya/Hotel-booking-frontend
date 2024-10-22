import React, { useState } from 'react';

// Updated gallery items with categories
const galleryItems = [
    {
        id: 1,
        title: 'Asian Food',
        description: 'A breathtaking view of the mountains during sunset.',
        imageUrl: '/images/a1.jpg',
        category: 'Dining',
    },
    {
        id: 2,
        title: 'City Lights',
        description: 'The skyline of the city illuminated at night.',
        imageUrl: '/images/a2.jpg',
        category: 'Hotels',
    },
    {
        id: 3,
        title: 'Forest Trail',
        description: 'A peaceful trail in the heart of the forest.',
        imageUrl: '/images/a3.jpg',
        category: 'Hotels',
    },
    {
        id: 4,
        title: 'Hotel Lobby',
        description: 'A luxurious lobby of a five-star hotel.',
        imageUrl: '/images/busi.jpg',
        category: 'Decorations',
    },
    {
        id: 5,
        title: 'Dining Table',
        description: 'An elegant dining setup for a special occasion.',
        imageUrl: '/images/concierge.jpg',
        category: 'Events',
    },
    {
        id: 1,
        title: 'Beautiful Landscape',
        description: 'A breathtaking view of the mountains during sunset.',
        imageUrl: '/images/d1.jpg',
        category: 'Events',
    },
    {
        id: 1,
        title: 'Beautiful Landscape',
        description: 'A breathtaking view of the mountains during sunset.',
        imageUrl: '/images/d2.jpeg',
        category: 'Weddings',
    },
    {
        id: 1,
        title: 'Beautiful Landscape',
        description: 'A breathtaking view of the mountains during sunset.',
        imageUrl: '/images/e1.jpg',
        category: 'Decorations',
    },
    {
        id: 1,
        title: 'Beautiful Landscape',
        description: 'A breathtaking view of the mountains during sunset.',
        imageUrl: '/images/e2.jpg',
        category: 'Hotels',
    },
    {
        id: 1,
        title: 'Beautiful Landscape',
        description: 'A breathtaking view of the mountains during sunset.',
        imageUrl: '/images/e3.jpg',
        category: 'Hotels',
    },
    {
        id: 1,
        title: 'Beautiful Landscape',
        description: 'A breathtaking view of the mountains during sunset.',
        imageUrl: '/images/f1.jpg',
        category: 'Hotels',
    },
    {
        id: 1,
        title: 'Beautiful Landscape',
        description: 'A breathtaking view of the mountains during sunset.',
        imageUrl: '/images/f2.jpg',
        category: 'Hotels',
    },
    {
        id: 1,
        title: 'Beautiful Landscape',
        description: 'A breathtaking view of the mountains during sunset.',
        imageUrl: '/images/fit.jpg',
        category: 'Hotels',
    },
    {
        id: 1,
        title: 'Beautiful Landscape',
        description: 'A breathtaking view of the mountains during sunset.',
        imageUrl: '/images/h1.jpg',
        category: 'Hotels',
    },
    {
        id: 1,
        title: 'Beautiful Landscape',
        description: 'A breathtaking view of the mountains during sunset.',
        imageUrl: '/images/h2.jpg',
        category: 'Hotels',
    },
    {
        id: 1,
        title: 'Beautiful Landscape',
        description: 'A breathtaking view of the mountains during sunset.',
        imageUrl: '/images/h3.jpg',
        category: 'Hotels',
    },
    {
        id: 1,
        title: 'Beautiful Landscape',
        description: 'A breathtaking view of the mountains during sunset.',
        imageUrl: '/images/h4.jpg',
        category: 'Dining',
    },
    {
        id: 1,
        title: 'Beautiful Landscape',
        description: 'A breathtaking view of the mountains during sunset.',
        imageUrl: '/images/h5.jpg',
        category: 'Dining',
    },
    {
        id: 1,
        title: 'Beautiful Landscape',
        description: 'A breathtaking view of the mountains during sunset.',
        imageUrl: '/images/h6.jpg',
        category: 'Dining',
    },
    {
        id: 1,
        title: 'Beautiful Landscape',
        description: 'A breathtaking view of the mountains during sunset.',
        imageUrl: '/images/h8.jpg',
        category: 'Dining',
    },
    {
        id: 1,
        title: 'Beautiful Landscape',
        description: 'A breathtaking view of the mountains during sunset.',
        imageUrl: '/images/i1.jpeg',
        category: 'Dining',
    },
    {
        id: 1,
        title: 'Beautiful Landscape',
        description: 'A breathtaking view of the mountains during sunset.',
        imageUrl: '/images/i2.jpg',
        category: 'Hotels',
    },
    {
        id: 1,
        title: 'Beautiful Landscape',
        description: 'A breathtaking view of the mountains during sunset.',
        imageUrl: '/images/i3.png',
        category: 'Hotels',
    },
    {
        id: 1,
        title: 'Beautiful Landscape',
        description: 'A breathtaking view of the mountains during sunset.',
        imageUrl: '/images/i4.jpg',
        category: 'Hotels',
    },
    {
        id: 1,
        title: 'Beautiful Landscape',
        description: 'A breathtaking view of the mountains during sunset.',
        imageUrl: '/images/i5.jpg',
        category: 'Hotels',
    },
    {
        id: 1,
        title: 'Beautiful Landscape',
        description: 'A breathtaking view of the mountains during sunset.',
        imageUrl: '/images/l1.jpg',
        category: 'Hotels',
    },
    {
        id: 1,
        title: 'Beautiful Landscape',
        description: 'A breathtaking view of the mountains during sunset.',
        imageUrl: '/images/l2.jpg',
        category: 'Hotels',
    },
    {
        id: 1,
        title: 'Beautiful Landscape',
        description: 'A breathtaking view of the mountains during sunset.',
        imageUrl: '/images/pool.jpeg',
        category: 'Dining',
    },
    {
        id: 1,
        title: 'Beautiful Landscape',
        description: 'A breathtaking view of the mountains during sunset.',
        imageUrl: '/images/r1.jpg',
        category: 'Dining',
    },
    {
        id: 1,
        title: 'Beautiful Landscape',
        description: 'A breathtaking view of the mountains during sunset.',
        imageUrl: '/images/r3.jpg',
        category: 'Dining',
    },
    {
        id: 1,
        title: 'Beautiful Landscape',
        description: 'A breathtaking view of the mountains during sunset.',
        imageUrl: '/images/room.jpg',
        category: 'Dining',
    },
    {
        id: 1,
        title: 'Beautiful Landscape',
        description: 'A breathtaking view of the mountains during sunset.',
        imageUrl: '/images/s1.jpg',
        category: 'Spa',
    },
    {
        id: 1,
        title: 'Beautiful Landscape',
        description: 'A breathtaking view of the mountains during sunset.',
        imageUrl: '/images/s3.jpg',
        category: 'Hotels',
    },
    {
        id: 1,
        title: 'Beautiful Landscape',
        description: 'A breathtaking view of the mountains during sunset.',
        imageUrl: '/images/s2.jpg',
        category: 'Dining',
    },
    {
        id: 1,
        title: 'Beautiful Landscape',
        description: 'A breathtaking view of the mountains during sunset.',
        imageUrl: '/images/s4.jpg',
        category: 'Weddings',
    },
    {
        id: 1,
        title: 'Beautiful Landscape',
        description: 'A breathtaking view of the mountains during sunset.',
        imageUrl: '/images/spa.jpg',
        category: 'Decorations',
    },
    {
        id: 1,
        title: 'Beautiful Landscape',
        description: 'A breathtaking view of the mountains during sunset.',
        imageUrl: '/images/v1.jpg',
        category: 'Hotels',
    },
    {
        id: 1,
        title: 'Beautiful Landscape',
        description: 'A breathtaking view of the mountains during sunset.',
        imageUrl: '/images/v2.jpg',
        category: 'Hotels',
    },
    {
        id: 1,
        title: 'Beautiful Landscape',
        description: 'A breathtaking view of the mountains during sunset.',
        imageUrl: '/images/v3.jpg',
        category: 'Hotels',
    },
      {
        id: 1,
        title: 'Beautiful Landscape',
        description: 'A breathtaking view of the mountains during sunset.',
        imageUrl: '/images/v4.jpg',
        category: 'Dining',
    },
    {
        id: 1,
        title: 'Beautiful Landscape',
        description: 'A breathtaking view of the mountains during sunset.',
        imageUrl: '/images/v6.jpg',
        category: 'Weddings',
    },
    {
        id: 1,
        title: 'Beautiful Landscape',
        description: 'A breathtaking view of the mountains during sunset.',
        imageUrl: '/images/v8.jpg',
        category: 'Hotels',
    },
    {
        id: 1,
        title: 'Beautiful Landscape',
        description: 'A breathtaking view of the mountains during sunset.',
        imageUrl: '/images/v9.jpg',
        category: 'Hotels',
    },
    {
        id: 1,
        title: 'Beautiful Landscape',
        description: 'A breathtaking view of the mountains during sunset.',
        imageUrl: '/images/v10.jpg',
        category: 'Hotels',
    },
    {
        id: 1,
        title: 'Beautiful Landscape',
        description: 'A breathtaking view of the mountains during sunset.',
        imageUrl: '/images/v11.jpg',
        category: 'Hotels',
    },
    {
        id: 1,
        title: 'Beautiful Landscape',
        description: 'A breathtaking view of the mountains during sunset.',
        imageUrl: '/images/v12.jpg',
        category: 'Dining',
    },
    {
        id: 1,
        title: 'Beautiful Landscape',
        description: 'A breathtaking view of the mountains during sunset.',
        imageUrl: '/images/v13.jpg',
        category: 'Hotels',
    },
    {
        id: 1,
        title: 'Beautiful Landscape',
        description: 'A breathtaking view of the mountains during sunset.',
        imageUrl: '/images/v14.jpeg',
        category: 'Hotels',
    },
    {
        id: 1,
        title: 'Beautiful Landscape',
        description: 'A breathtaking view of the mountains during sunset.',
        imageUrl: '/images/v15.jpeg',
        category: 'Weddings',
    },
    {
        id: 1,
        title: 'Beautiful Landscape',
        description: 'A breathtaking view of the mountains during sunset.',
        imageUrl: '/images/v16.jpeg',
        category: 'Weddings',
    },
    {
        id: 1,
        title: 'Beautiful Landscape',
        description: 'A breathtaking view of the mountains during sunset.',
        imageUrl: '/images/v17.jpeg',
        category: 'Events',
    },
    {
        id: 1,
        title: 'Beautiful Landscape',
        description: 'A breathtaking view of the mountains during sunset.',
        imageUrl: '/images/v18.jpeg',
        category: 'Decorations',
    },
    {
        id: 1,
        title: 'Beautiful Landscape',
        description: 'A breathtaking view of the mountains during sunset.',
        imageUrl: '/images/v19.jpeg',
        category: 'Weddings',
    },
    // Add more items with categories as needed
];

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('All');

    const handleImageClick = (item) => {
        setSelectedImage(item);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    // Filter gallery items based on selected category
    const filteredItems = selectedCategory === 'All' 
        ? galleryItems 
        : galleryItems.filter(item => item.category === selectedCategory);

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold text-center mb-6">Gallery</h2>
            {/* Category buttons */}
            <div className="mb-4 flex justify-center space-x-4">
                {['All', 'Weddings', 'Functions', 'Decorations', 'Hotels', 'Dining'].map(category => (
                    <button
                        key={category}
                        onClick={() => handleCategoryChange(category)}
                        className={`px-4 py-2 rounded ${selectedCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}
                    >
                        {category}
                    </button>
                ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredItems.map((item) => (
                    <div 
                        key={item.id} 
                        className="cursor-pointer transition-transform transform hover:scale-105" 
                        onClick={() => handleImageClick(item)}
                    >
                        <img 
                            src={item.imageUrl} 
                            alt={item.title} 
                            className="w-full h-48 object-cover rounded-lg" 
                        />
                        <h3 className="mt-2 text-lg font-semibold text-center">{item.title}</h3>
                    </div>
                ))}
            </div>

            {/* Modal for displaying the selected image and description */}
            {selectedImage && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
                    <div className="bg-white rounded-lg p-4 max-w-lg w-full">
                        <img 
                            src={selectedImage.imageUrl} 
                            alt={selectedImage.title} 
                            className="w-full h-64 object-cover rounded-lg mb-4" 
                        />
                        <h3 className="text-xl font-bold mb-2">{selectedImage.title}</h3>
                        <p className="text-gray-600">{selectedImage.description}</p>
                        <button onClick={closeModal} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}
