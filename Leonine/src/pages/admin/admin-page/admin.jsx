import { Link, Route, Routes } from "react-router-dom";
import { IoBookmarks } from "react-icons/io5";
import { BiSolidCategory } from "react-icons/bi";
import { FaBed, FaUsers, FaCommentDots, FaImages } from "react-icons/fa";
import AdminBooking from "../bookings/adminBooking";
import AdminCategories from "../categories/adminCategory";
import AdminGalleryItem from "../galleryItem/galleryItems";
import AdminRooms from "../rooms/rooms";
import AdminUsers from "../users/users";
import AdminFeedback from "../feedback/feedback";
import Footer from "../admin-footer/afooter";

export default function AdminPage() {
    return (
        <div className="w-full max-h-[100vh] overflow-hidden flex">
            <div className="w-[15%] bg-[#050e16] h-[100vh] flex flex-col"> {/* Dark blue background for sidebar */}
                
                {/* Logo and Name Section with Darkest Blue Background */}
                <div className="flex flex-col items-center py-4 bg-[#0a1e2f]"> {/* Darkest blue for logo section */}
                    <img src="images/Leonine.png" className="w-16 h-16" /> {/* Logo */}
                    <span className="text-[#F3C623] text-[20px] font-bold">Leonine Villa</span> {/* Gold color for name */}
                </div>
                
                {/* Sidebar Links */}
                <div className="flex-grow flex flex-col justify-between mt-4"> {/* Added margin top for separation */}
                    <div>
                        {/* Increased vertical spacing by changing py-1 to py-3 and added left padding */}
                        <div className="text-[#F3C623] text-[24px] hover:font-bold flex items-center hover:text-white py-3 pl-4">
                            <Link to="/admin/bookings" className="flex items-center">
                                <IoBookmarks className="mr-2" />
                                Bookings 
                            </Link>
                        </div>
                        <div className="text-[#F3C623] text-[24px] hover:font-bold flex items-center hover:text-white py-3 pl-4">
                            <Link to="/admin/categories" className="flex items-center">
                                <BiSolidCategory className="mr-2" />
                                Categories
                            </Link>
                        </div>
                        <div className="text-[#F3C623] text-[24px] hover:font-bold flex items-center hover:text-white py-3 pl-4">
                            <Link to="/admin/rooms" className="flex items-center">
                                <FaBed className="mr-2" />
                                Rooms
                            </Link>
                        </div>
                        <div className="text-[#F3C623] text-[24px] hover:font-bold flex items-center hover:text-white py-3 pl-4">
                            <Link to="/admin/users" className="flex items-center">
                                <FaUsers className="mr-2" />
                                Users
                            </Link>
                        </div>
                        <div className="text-[#F3C623] text-[24px] hover:font-bold flex items-center hover:text-white py-3 pl-4">
                            <Link to="/admin/feedback" className="flex items-center">
                                <FaCommentDots className="mr-2" />
                                Feedback
                            </Link>
                        </div>
                        <div className="text-[#F3C623] text-[24px] hover:font-bold flex items-center hover:text-white py-3 pl-4">
                            <Link to="/admin/galleryItems" className="flex items-center">
                                <FaImages className="mr-2" />
                                Gallery Items
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[85%] max-h-[100vh] overflow-y-scroll bg-[#10375C]">
                <Routes path="/*">
                    <Route path="/bookings" element={<AdminBooking />} />
                    <Route path="/categories" element={<AdminCategories />} />
                    <Route path="/rooms" element={<AdminRooms />} />
                    <Route path="/users" element={<AdminUsers />} />
                    <Route path="/feedback" element={<AdminFeedback />} />
                    <Route path="/galleryItems" element={<AdminGalleryItem />} />
                </Routes>
            </div>
            <Footer/>
        </div>
       
    );
}
