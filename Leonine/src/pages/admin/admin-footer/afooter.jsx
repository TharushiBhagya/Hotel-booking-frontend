// Footer.js
import React from 'react';

const Footer = () => {
    return (
        <footer 
            className="fixed bottom-0 left-0 w-full bg-[#050e16] text-right p-4"
            style={{ zIndex: 1000 }}
        >
            <span 
                className="text-[#F3C623] font-serif text-xs"
                style={{ fontFamily: 'cursive' }} // Using a cursive font as an example of a modified font
            >
                Leonine Villa
            </span>
        </footer>
    );
};

export default Footer;
