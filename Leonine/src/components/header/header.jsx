import { Link } from "react-router-dom";
import UserTag from "../userData/userdata";

function Header() {
    return (
        <header className="w-full bg-[#050e16] flex items-center justify-between h-[100px] px-6 fixed top-0 z-50">
            <UserTag imagelink="images/Leonine.png" name="Leonine Villa" />
            <nav className="flex space-x-6 text-white text-lg ml-auto font-semibold">
                <Link to="/home" className="hover:text-gray-200">Home</Link>
                <Link to="/about" className="hover:text-gray-200">About Us</Link>
                <Link to="/dining" className="hover:text-gray-200">Dining</Link>
                <Link to="/rooms" className="hover:text-gray-200">Our Rooms</Link>
                <Link to="/contact" className="hover:text-gray-200">Contact</Link>
                <Link to="/gallery" className="hover:text-gray-200">Gallery</Link>
                <Link to="/services" className="hover:text-gray-200">Services</Link>
                
                <button className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600 transition-all ml-4">
                    Book Now
                </button>
            </nav>
        </header>
    );
}

export default Header;

