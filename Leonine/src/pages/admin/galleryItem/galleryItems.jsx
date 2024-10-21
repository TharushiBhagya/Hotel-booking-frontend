import React, { useState } from 'react';

// GalleryItem component to represent individual gallery items
const GalleryItem = ({ item, onDelete }) => {
    return (
        <div className="gallery-item bg-[#F3C623] p-4 rounded-lg shadow-lg mb-6">
            <h3 className="text-[#10375C] text-lg font-bold mb-2">{item.name}</h3>
            <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded-lg mb-3" />
            <p className="text-[#10375C]">{item.description}</p>
            <button 
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-200"
                onClick={() => onDelete(item.name)}
            >
                Delete
            </button>
        </div>
    );
};

// AdminGalleryPanel component for managing the gallery
const AdminGalleryPanel = () => {
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState({
        name: '',
        image: '',
        description: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewItem(prev => ({ ...prev, [name]: value }));
    };

    const handleAddItem = (e) => {
        e.preventDefault();
        if (newItem.name && newItem.image && newItem.description) {
            setItems(prevItems => [...prevItems, newItem]);
            setNewItem({ name: '', image: '', description: '' }); // Reset the form
        }
    };

    const handleDeleteItem = (name) => {
        setItems(prevItems => prevItems.filter(item => item.name !== name));
    };

    return (
        <div className="admin-gallery-panel p-8 bg-[#F4F6FF] min-h-screen">
            <h1 className="text-center text-3xl font-bold mb-10 text-[#10375C]">Gallery Management</h1>
            
            {/* Form to add new gallery item */}
            <form 
                onSubmit={handleAddItem} 
                className="mb-12 mx-auto bg-white p-8 rounded-lg shadow-md w-full max-w-lg"
                style={{ marginTop: '2rem' }} // Adding extra margin above the form
            >
                <h2 className="text-[#10375C] text-xl font-semibold mb-6">Add New Gallery Item</h2>
                <input 
                    type="text" 
                    name="name" 
                    value={newItem.name}
                    onChange={handleInputChange} 
                    placeholder="Gallery Item Name" 
                    required 
                    className="border border-[#EB8317] rounded p-3 mb-4 w-full"
                />
                <input 
                    type="text" 
                    name="image" 
                    value={newItem.image}
                    onChange={handleInputChange} 
                    placeholder="Image URL" 
                    required 
                    className="border border-[#EB8317] rounded p-3 mb-4 w-full"
                />
                <textarea 
                    name="description" 
                    value={newItem.description}
                    onChange={handleInputChange} 
                    placeholder="Description" 
                    required 
                    className="border border-[#EB8317] rounded p-3 mb-4 w-full"
                ></textarea>
                <button 
                    type="submit" 
                    className="bg-[#10375C] text-white px-6 py-3 rounded w-full hover:bg-[#EB8317] transition duration-200"
                >
                    Add Gallery Item
                </button>
            </form>

            {/* List of gallery items */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {items.length > 0 ? (
                    items.map((item, index) => (
                        <GalleryItem 
                            key={index} 
                            item={item} 
                            onDelete={handleDeleteItem} 
                        />
                    ))
                ) : (
                    <p className="text-center text-[#10375C] text-lg col-span-full">No gallery items available. Add some!</p>
                )}
            </div>
        </div>
    );
};

// Main component to render the admin gallery
export default function AdminGalleryItem() {
    return (
        <div>
            <AdminGalleryPanel />
        </div>
    );
}
